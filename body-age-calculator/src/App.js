import './App.css';
import React, { Component } from 'react';
import Layout from './Components/Layout/Layout'
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './Components/Authentication/Auth';
import Logout from './Components/Authentication/Logout';
import Home from './Components/BadyAgeCalculator/BodyAgeCalculator';
import Results from './Components/Results/Results';
import firebase from 'firebase/app'
import { connect } from 'react-redux';
import { authCheckState } from './store/actions/auth';

class App extends Component {

  componentDidMount() {
    this.props.tryAutoLogin();
  }

  render() {
    if (!firebase.apps[0]) {
      firebase.initializeApp({
        apiKey: "AIzaSyA9jNWT8zBFb0UdXW3vk6-nvfFNIUtZ2a8",
        authDomain: "body-age-calculator.firebaseapp.com",
        databaseURL: "https://body-age-calculator-default-rtdb.firebaseio.com",
        projectId: "body-age-calculator",
        storageBucket: "body-age-calculator.appspot.com",
        messagingSenderId: "678533667647",
        appId: "1:678533667647:web:1f006f6202ee5db506518a"
      })
    }

    let routes = <Switch>
      <Route path="/auth" component={Auth} />
      <Redirect to="/auth" />
    </Switch>

    if (this.props.isAuthenticated) {
      routes = <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/logout" component={Logout} />
        <Redirect to='/' />
      </Switch>
    }
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryAutoLogin: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
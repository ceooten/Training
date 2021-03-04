import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../store/actions/auth';

class Logout extends Component {

    componentDidMount() {
        this.props.logOut();
    }

    render() {
        let content = null;
        if (!this.props.isAuthenticated) {
            localStorage.removeItem("user");
            content = <Redirect to='/' />
        } else {
            content = <p>{this.props.error}</p>
        }
     
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);
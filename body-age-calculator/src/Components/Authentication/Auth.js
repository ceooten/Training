import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logIn} from '../../store/actions/auth';

class Auth extends Component {

    clickHandler = () => {
        this.props.logIn();
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Login with Google</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => dispatch(logIn())
    }
}


export default connect(null, mapDispatchToProps)(Auth);
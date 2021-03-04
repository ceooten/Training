import * as actionTypes from './actionTypes';
import firebase from 'firebase/app';
import 'firebase/auth';

export const logInSuccess = (token, displayName) => {
    return {
        type: actionTypes.LOG_IN_SUCCESS,
        token: token,
        displayName: displayName
    }
};

export const logInFailed = (error) => {
    return {
        type: actionTypes.LOG_IN_FAILED,
        error: error
    }
};

export const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("displayName");
    localStorage.removeItem("expirationDate");
    return {
        type: actionTypes.LOG_OUT,
    }
}

export const logIn = () => {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const expirationDate = new Date(new Date().getTime() + 60 * 60000);
                localStorage.setItem('token', result.user.refreshToken);
                localStorage.setItem('displayName', result.user.displayName);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(logInSuccess(result.user.refreshToken, result.user.displayName))
            }).catch((error) => {
                dispatch(logInFailed(error));
            });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logOut());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logOut());
            } else {
                const displayName = localStorage.getItem('displayName');
                dispatch(logInSuccess(token, displayName));
            }
        }
    }
}
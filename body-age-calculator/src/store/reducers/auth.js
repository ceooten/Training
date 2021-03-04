import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    displayName: null,
    token: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                displayName: action.displayName,
                token: action.token,
                error: null
            };
        case actionTypes.LOG_IN_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                displayName: null,
                token: null,
                error: action.error
            };
        case actionTypes.LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                displayName: null,
                token: null,
                error: null
            };
        default:
            return state;
    }
}

export default reducer;
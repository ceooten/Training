import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESULTS_SUCCESS:
            return {
                ...state,
                results: action.results,
                error: null
            };
        case actionTypes.GET_RESULTS_FAILED:
            return {
                ...state,
                results: null,
                error: action.error
            };
        default:
            return state;
    }
}

export default reducer;
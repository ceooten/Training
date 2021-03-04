import * as actionTypes from '../actions/actionTypes';

const initialState = {
    questionIndex: 0,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    bodyAge: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_QUESTION_INDEX:
            return {
                ...state,
                questionIndex: state.questionIndex + action.val
            };
        case actionTypes.STORE_QUESTION_RESULTS:
            return {
                ...state,
                q1: action.q1,
                q2: action.q2,
                q3: action.q3,
                q4: action.q4,
                bodyAge: action.bodyAge
            };
        default:
            return state;
    }
}

export default reducer;
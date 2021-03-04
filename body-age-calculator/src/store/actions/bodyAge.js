import * as actionTypes from './actionTypes'
import axios from 'axios';
import moment from 'moment';

export const changeQuestionIndex = (val) => {
    return {
        type: actionTypes.CHANGE_QUESTION_INDEX,
        val: val
    }
}

export const reduxStoreResults = (results, bodyAge) => {
    return {
        type: actionTypes.STORE_QUESTION_RESULTS,
        q1: results.q1,
        q2: results.q2,
        q3: results.q3,
        q4: results.q4,
        bodyAge: bodyAge
    }
}

export const postBodyAgeResults = (results, displayName) => {

    let bodyAge = calculateBodyAge(results);
    
    let bodyAgeEntry = {
        name: displayName,
        bodyAge: bodyAge,
        date: new Date()
    }

    return (dispatch) => {
        dispatch(reduxStoreResults(results, bodyAge));
        axios.post('https://body-age-calculator-default-rtdb.firebaseio.com/BodyAgeResults.json', bodyAgeEntry)
    }
}

export const calculateBodyAge = (results) => {
    var offset = (parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4));

    var age = moment().diff(results.q1, 'years', false);

    var bodyAge = parseInt(age) + parseInt(offset);

    return bodyAge;
}
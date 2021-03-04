import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getResults = () => {
    return (dispatch) => {
        axios.get('https://body-age-calculator-default-rtdb.firebaseio.com/BodyAgeResults.json')
            .then(res => {
                const fetchedResults = [];
                for (let key in res.data) {
                    fetchedResults.push({
                        ...res.data[key],
                        id: key
                    });
                }

                let sortedResults = fetchedResults.sort((a, b) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                })
                dispatch(getResultsSuccess(sortedResults));
            })
            .catch(err => {
                dispatch(getResultsFailed(err));
            });
    }
}

export const getResultsSuccess = (sortedResults) => {
    return {
        type: actionTypes.GET_RESULTS_SUCCESS,
        results: sortedResults
    }
}

export const getResultsFailed = (err) => {
    return {
        type: actionTypes.GET_RESULTS_FAILED,
        error: err
    }
}
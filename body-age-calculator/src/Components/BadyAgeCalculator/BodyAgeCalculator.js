import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import Question from './Question/Question';
import { formatDate, formatPastDate } from '../../Utilities/Utilities';
import { connect } from 'react-redux';
import { postBodyAgeResults, changeQuestionIndex } from '../../store/actions/bodyAge';
import classes from './BodyAgeCalculator.module.css';
import questionClasses from './Question/Question.module.css';
import { NavLink } from 'react-router-dom';

export const BodyAgeCalculator = (props) => {
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState();
    const [q3, setQ3] = useState();
    const [q4, setQ4] = useState();

    const q1Changed = (e) => {
        setQ1(e.target.value)
    }

    const q2Changed = (e) => {
        setQ2(e.target.value)
    }

    const q3Changed = (e) => {
        setQ3(e.target.value)
    }

    const q4Changed = (e) => {
        setQ4(e.target.value)
    }

    const isInputBlank = () => {
        if (!q1 || !q2 || !q3 || !q4) {
            return true;
        } else {
            return false;
        }
    }

    
    let proceedButton = <button className={classes.button} onClick={() => props.changeQuestionIndex(1)}>Next</button>;
    if (props.questionIndex == 4) {
        proceedButton = <button className={classes.button} onClick={() => props.postBodyAgeResults({ q1, q2, q3, q4 }, props.displayName)} disabled={isInputBlank()}>Calculate</button>
    }

    let currentQuestion = null;
    switch (props.questionIndex) {
        case 0:
            currentQuestion =
                <div className={questionClasses.Question}>
                    <div className={questionClasses.QuestionText}> What is your date of birth?</div>
                    <div className={questionClasses.ResponseGroup}>
                        <label htmlFor="DOB">Date of Birth: </label>
                        <input type="date" id="DOB" name="dateOfBirth"
                            onChange={q1Changed}
                            value={q1}
                            min={formatPastDate(new Date(), 115)}
                            max={formatDate(new Date())}>
                        </input>
                    </div>
                </div>
            break;
        case 1:
            currentQuestion =
                <Question
                    changed={q2Changed}
                    val={q2}
                    responses={[['Never', 1], ['Sometimes', 0], ['Always', -1]]}>
                    Do you workout weekly?
                    </Question>
            break;
        case 2:
            currentQuestion =
                <Question
                    changed={q3Changed}
                    val={q3}
                    responses={[['Never', -1], ['Sometimes', 0], ['Always', 1]]}>
                    Do you eat junk food?
                    </Question>
            break;
        case 3:
            currentQuestion =
                <Question
                    changed={q4Changed}
                    val={q4}
                    responses={[['Yes', -1], ['No', 1]]}>
                    Can you touch your toes?
                    </Question>
            break;
        case 4:
            currentQuestion =
                <div className={questionClasses.Question}>
                    <div className={questionClasses.QuestionText}>{isInputBlank() ? 'Oops! It looks like you missed a question.' : 'All done!'}</div>
                    <div className={questionClasses.ResponseGroup}>
                        {isInputBlank() ? 'Answer all questions to calculate your body age.' : 'Click below to calculate your body age.'}
                    </div>
                </div>
            break;
        default:
            currentQuestion = null
            break;
    }

    let pageContent =
        (<div>
            <h3>Calculate your body age by answering the folloring questions:</h3>
            <ProgressBar questionIndex={props.questionIndex} />
            {currentQuestion}
            <button className={classes.button} onClick={() => props.changeQuestionIndex(-1)} disabled={props.questionIndex == 0}>Previous</button>
            {proceedButton}
        </div>);


    if (props.bodyAge) {
        pageContent =
            <div>
                <div className={questionClasses.Question}>
                    <div className={questionClasses.QuestionText}>Your body age:</div>
                    <div className={questionClasses.ResponseGroup}>
                        {props.bodyAge} years
                    </div>
                </div>
                <button className={classes.button} onClick={() => window.location.reload(false)}>Try Again</button>
                <NavLink to='/results'><button className={classes.button}>View All Results</button></NavLink>
            </div>
    }

    return (
        <div>
            {pageContent}
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        questionIndex: state.bodyAge.questionIndex,
        bodyAge: state.bodyAge.bodyAge,
        displayName: state.auth.displayName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuestionIndex: (val) => dispatch(changeQuestionIndex(val)),
        postBodyAgeResults: (result, displayName) => dispatch(postBodyAgeResults(result, displayName))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(BodyAgeCalculator);
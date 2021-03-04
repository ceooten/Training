import React from 'react';
import classes from './Question.module.css';

const Question = (props) => (
    <div className={classes.Question}>
        <div className={classes.QuestionText}>{props.children}</div>
        <div className={classes.ResponseGroup}>
            {props.responses.map(([key, value]) => (
                <label className={classes.Responses} key={key}><input type="radio" checked={props.val == value} onChange={props.changed} value={value} name='response' />{key}</label>
            ))}
        </div>
    </div>
)

export default Question;
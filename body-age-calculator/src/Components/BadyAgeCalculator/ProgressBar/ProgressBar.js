import React from 'react';
import classes from './ProgressBar.module.css';

const ProgressBar = (props) => (
    <div className={classes.ProgressBar}>
        <progress value={props.questionIndex} max='4' data-label={props.questionIndex}></progress>
    </div>
)

export default ProgressBar;
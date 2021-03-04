import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './NavigationBar.module.css';

const NavigationBar = (props) => (
    <div className={classes.NavigationBar}>
        <NavigationItems isAuthenticated={props.isAuthenticated}/>
    </div>
)

export default NavigationBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
    <NavLink
        className={classes.NavigationItem}
        exact={props.exact}
        to={props.linkTo}>

        {props.linkName}

    </NavLink>
)

export default NavigationItem;
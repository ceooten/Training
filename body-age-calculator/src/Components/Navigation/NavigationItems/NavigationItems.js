import React, {Fragment} from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'

const NavigationItems = (props) => (
    <div className={classes.NavigationItems}>
        {props.isAuthenticated 
            ? <Fragment>
                <NavigationItem linkName='Home' linkTo='/' />
                <NavigationItem linkName='Results' linkTo="/results"/>
              </Fragment>
            : null}
        {!props.isAuthenticated  
            ? <NavigationItem linkName='Login' linkTo="/auth"/>
            : <NavigationItem linkName='Logout' linkTo="/logout"/> }

    </div>
)

export default NavigationItems; <NavigationItem />
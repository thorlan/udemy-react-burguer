import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './Item.module.css'

const item = (props) => (

    <li className={classes.Item}>
        <NavLink 
            activeClassName={classes.active} 
            to={props.link}
            exact>{props.children}</NavLink> 
    </li>

);

export default item;
import React from 'react';

import classes from './Drawertoggle.module.css'

const drawerToogle = (props) => (
    
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawerToogle;
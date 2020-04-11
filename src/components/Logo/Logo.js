import React from 'react';

import classes from "./Logo.module.css";

import burguerLogo from '../../assets/images/burguer-logo.png';

const logo = (props) => (

    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burguerLogo} alt="MyBurguer" />
    </div>

);

export default logo;
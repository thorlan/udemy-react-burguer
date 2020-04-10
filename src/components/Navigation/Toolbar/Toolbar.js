import React from 'react';

import Logo from '../../Logo/Logo';
import Items from '../Items/Items';

import classes from './Toolbar.module.css';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
           <Items></Items>
        </nav>
    </header>
);

export default toolbar;
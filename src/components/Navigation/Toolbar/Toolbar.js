import React from 'react';

import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

import classes from './Toolbar.module.css';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.drawerToggleClicked}/>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}> 
           <Items></Items>
        </nav>
    </header>
);

export default toolbar;
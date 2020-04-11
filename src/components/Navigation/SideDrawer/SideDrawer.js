import React from 'react';

import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import Items from '../Items/Items';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>

            <Backdrop show={props.open} clicked={props.closed}/>

            <div className={attachedClasses.join(' ')}>
                <Logo height="11%"/>
                <nav>
                    <Items></Items>
                </nav>
            </div>

        </Aux>
    );
}

export default sideDrawer;
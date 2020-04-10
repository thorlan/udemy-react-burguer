import React from 'react';

import Item from './Item/Item';

import classes from './Items.module.css'

const items = (props) => (

    <ul className={classes.Items}>
        <Item link="/" active>Burguer Builder</Item>
        <Item link="/">Checkout</Item>
    </ul>

);

export default items;
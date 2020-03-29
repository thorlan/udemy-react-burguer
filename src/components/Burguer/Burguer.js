import React from 'react';

import classes from './Burguer.module.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'

const burguer = ( props ) => {
    
    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            <BurguerIngredient type="salad" />
            <BurguerIngredient type="meat" />
            <BurguerIngredient type="cheese" />
            <BurguerIngredient type="bacon" />
            <BurguerIngredient type="meat" />
            <BurguerIngredient type="cheese" />
            <BurguerIngredient type="bread-bottom" />
        </div>
    );

}

export default burguer;
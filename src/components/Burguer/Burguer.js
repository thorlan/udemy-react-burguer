import React from 'react';

import classes from './Burguer.module.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'

const burguer = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_,i) => {
                    return <BurguerIngredient key={igKey + i} type={igKey} />
                });
        }).reduce((previousArray, currentElement) => {
            return previousArray.concat(currentElement);
        } ,[]);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding igredients</p>
    }
    
    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurguerIngredient type="bread-bottom"/>
        </div>
    );

}

export default burguer;
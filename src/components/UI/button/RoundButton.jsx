import React from 'react';
import classes from './Buttons.module.css'
const RoundButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.roundButton}>
            {children}
        </button>
    );
};

export default RoundButton;
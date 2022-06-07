import React from 'react';
import classes from "./Buttons.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myButton}>
            {children}
        </button>
    );
};

export default MyButton;
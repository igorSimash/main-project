import React from 'react';
import classes from "./MyInput.module.css";

const SmallInput = (props) => {
    return (
        <input {...props} className={classes.smallInput}/>
    );
};

export default SmallInput;
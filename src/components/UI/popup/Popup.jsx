import React from 'react';
import classes from './Popup.module.css';

const Popup = ({children, isVisible, setVisibility}) => {

    const currClasses = [classes.popup]
    if(isVisible){
        currClasses.push(classes.active)
    }

    return (
        <div className={currClasses.join(' ')} onClick={() => setVisibility(false)}>
            <div className={classes.popupContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Popup;
import React from 'react';
import classes from './Link.module.css'
const HeaderLink = ({children, href}) => {
    return (
        <div className={classes.dashLink}>
            <a href={href}>
                {children}
            </a>
        </div>
    );
};

export default HeaderLink;
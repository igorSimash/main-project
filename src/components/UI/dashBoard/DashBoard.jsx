import React from 'react';
import classes from './DashBoard.module.css'
import {Link} from "react-router-dom";

const DashBoard = () => {
    return (
        <>
            <div className={classes.mainDashBoard}>
                <div className={classes.name} onClick={() => location.href = "/"}>
                    <img src="https://miro.medium.com/max/512/1*jA5lTgPRbyimsFNod7SlFQ.png" alt=""/>
                    <h1>My React App</h1>
                </div>
                <header className={classes.header}>
                    <nav className={classes.navigation}>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/lists"}>Lists</Link>
                        <Link to={"/calculator"}>Calculator</Link>
                        <Link to={"/currency"}>Currency</Link>
                        <Link to={"/different"}>Different</Link>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default DashBoard;
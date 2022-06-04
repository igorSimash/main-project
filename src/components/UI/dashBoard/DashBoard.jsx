import React from 'react';
import classes from './DashBoard.module.css'
import {Router, Routes, Link, Route} from "react-router-dom";
import Calculator from "../../Calculator";
import CurrencySelect from "../select/CurrencySelect";
import App from "../../../App";
import Lists from "../../Lists";
import Counter from "../../Counter";
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
                        <Link to={"/counter"}>Counter</Link>
                    </nav>
                </header>
            </div>
            <Routes>
                <Route path="/lists" element={<Lists/>}/>
                <Route path="/calculator" element={<Calculator/>}/>
                <Route path="/currency" element={<CurrencySelect/>}/>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </>
    );
};

export default DashBoard;
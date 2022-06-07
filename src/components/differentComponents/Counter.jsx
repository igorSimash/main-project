import React, {useState} from 'react';
import classes from './Counter.module.css'
import MyButton from "../UI/button/MyButton";

const Counter = () => {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1)
    }

    return (
        <div className={classes.counter}>
            <h1>{count}</h1>
            <MyButton onClick={add}>Add</MyButton>
            <MyButton onClick={minus}>Minus</MyButton>
        </div>
    );
};

export default Counter;
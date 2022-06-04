import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    function add(){
        setCount(count + 1);
    }
    function minus(){
        setCount(count - 1)
    }

    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={add}>Add</button>
            <button onClick={minus}>Minus</button>
        </div>
    );
};

export default Counter;
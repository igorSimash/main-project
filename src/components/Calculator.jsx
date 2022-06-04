import React, {useState} from 'react';

const Calculator = () => {
    const [input, setInput] = useState('0');
    const [data, setData] = useState('');
    const [actionClicked, setActionClicked] = useState(false);
    const [isCounted, setIsCounted] = useState(false);
    const writeSymbols = (e) => {
        if ((data.charAt(data.length - 1) === '.' && e.target.innerHTML === '.')
        || (data.length === 0 && e.target.innerHTML === '.')
        || (actionClicked && e.target.innerHTML === '.'))
            return;
        if (input.charAt(0) === '0' && input.length === 1) {
            setData(e.target.innerHTML);
            setInput(e.target.innerHTML);
            return;
        }
        if (input.charAt(0) === '0' && input.length === 1 && e.target.innerHTML === '.') {
            setData('0.');
            setInput('0.');
            return;
        }
        if (isCounted){
            setInput(e.target.innerHTML);
            setData(e.target.innerHTML);
            setIsCounted(false);
            return;
        }
        if (!actionClicked){
            setInput(input + e.target.innerHTML);
        }
        else{
            setInput(e.target.innerHTML);
            setActionClicked(false);
        }
        setData(data + e.target.innerHTML);
    }
    const getAction = (e) => {
        if (!actionClicked && data) {
            setData(data + e.target.innerHTML);
        }
        else {
            setData(data.replace(/.$/, e.target.innerHTML))
        }
        setActionClicked(true);
    };
    const clearAll = () => {
        setIsCounted(false);
        setActionClicked(false);
        setInput('0');
        setData('');
    }
    const clearOne = () => {
        setInput(input.substr(0, input.length - 1));
        setData(data.substr(0, data.length - 1));
    }
    const count = () => {
        if (data) {
            setIsCounted(true)
            try {
                setInput(
                    (String(eval(data)).length > 3
                        && String(eval(data)).includes("."))
                        ?
                        String(eval(data).toFixed(4).replace(/0*$/, ''))
                        :
                        String(eval(data))
                )
            } catch (err) {
                console.log(err);
                setInput('Wrong')
            }
        }
    }

    return (
        <div className={"calculator"}>
            <div className={"screen"}>
                {input}
            </div>
            <div  className={"buttons"}>
                <div onClick={clearAll} className={"btn clearAll light"}>AC</div>
                <div onClick={clearOne} className={"btn clear light"}>C</div>
                <div className={"btn percent light"}>%</div>
                <div onClick={getAction} className={"btn division orange"}>/</div>

                <div onClick={writeSymbols} className={"btn seven"}>7</div>
                <div onClick={writeSymbols} className={"btn eight"}>8</div>
                <div onClick={writeSymbols} className={"btn nine"}>9</div>
                <div onClick={getAction} className={"btn multiply orange"}>*</div>

                <div onClick={writeSymbols} className={"btn four"}>4</div>
                <div onClick={writeSymbols} className={"btn five"}>5</div>
                <div onClick={writeSymbols} className={"btn six"}>6</div>
                <div onClick={getAction} className={"btn minus orange"}>-</div>

                <div onClick={writeSymbols} className={"btn one"}>1</div>
                <div onClick={writeSymbols} className={"btn two"}>2</div>
                <div onClick={writeSymbols} className={"btn three"}>3</div>
                <div onClick={getAction} className={"btn plus orange"}>+</div>

                <div onClick={writeSymbols} className={"btn zero"}>0</div>
                <div onClick={writeSymbols} className={"btn dot"}>.</div>
                <div onClick={count} className={"btn equal orange"}>=</div>
            </div>
        </div>
    );
};

export default Calculator;
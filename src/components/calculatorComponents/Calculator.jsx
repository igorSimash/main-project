import React, {useState} from 'react';
import classes from "./Calculator.module.css"

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
        if (isCounted) {
            setInput(e.target.innerHTML);
            setData(e.target.innerHTML);
            setIsCounted(false);
            return;
        }
        if (!actionClicked) {
            setInput(input + e.target.innerHTML);
        } else {
            setInput(e.target.innerHTML);
            setActionClicked(false);
        }
        setData(data + e.target.innerHTML);
    }
    const getAction = (e) => {
        if (!actionClicked && data) {
            setData(data + e.target.innerHTML);
        } else {
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
        <div className={classes.calculator}>
            <div className={classes.screen}>
                {input}
            </div>
            <div className={classes.buttons}>
                <div onClick={clearAll} className={`${classes.btn} clearAll ${classes.light}`}>AC</div>
                <div onClick={clearOne} className={`${classes.btn} clear ${classes.light}`}>C</div>
                <div className={`${classes.btn} percent ${classes.light}`}>%</div>
                <div onClick={getAction} className={`${classes.btn} division ${classes.orange}`}>/</div>

                <div onClick={writeSymbols} className={`${classes.btn} seven`}>7</div>
                <div onClick={writeSymbols} className={`${classes.btn} eight`}>8</div>
                <div onClick={writeSymbols} className={`${classes.btn} nine`}>9</div>
                <div onClick={getAction} className={`${classes.btn} multiply ${classes.orange}`}>*</div>

                <div onClick={writeSymbols} className={`${classes.btn} four`}>4</div>
                <div onClick={writeSymbols} className={`${classes.btn} five`}>5</div>
                <div onClick={writeSymbols} className={`${classes.btn} six`}>6</div>
                <div onClick={getAction} className={`${classes.btn} minus ${classes.orange}`}>-</div>

                <div onClick={writeSymbols} className={`${classes.btn} one`}>1</div>
                <div onClick={writeSymbols} className={`${classes.btn} two`}>2</div>
                <div onClick={writeSymbols} className={`${classes.btn} three`}>3</div>
                <div onClick={getAction} className={`${classes.btn} plus ${classes.orange}`}>+</div>

                <div onClick={writeSymbols} className={`${classes.btn} ${classes.zero} zero`}>0</div>
                <div onClick={writeSymbols} className={`${classes.btn} dot`}>.</div>
                <div onClick={count} className={`${classes.btn} equal ${classes.orange}`}>=</div>
            </div>
        </div>
    );
};

export default Calculator;
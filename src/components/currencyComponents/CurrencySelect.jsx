import React, {useEffect, useMemo, useRef, useState} from 'react';
import selectClasses from "../UI/select/ListSelect.module.css";
import ListService from "../../API/ListService";
import CurrencyTable from "./CurrencyTable";
import MyButton from "../UI/button/MyButton";
import classes from "./Currency.module.css"

const CurrencySelect = () => {
    const [currency, setCurrency] = useState('');
    const [currencyArr, setCurrencyArr] = useState([]);
    const [savedArr, setSavedArr] = useState({PLN: [], USD: [], EUR: []})
    const getIndex = () => {
        let num = Number();
        if (currency === "USD")
            num = 25;
        else if (currency === "EUR")
            num = 32;
        else if (currency === "PLN")
            num = 33;
        return num;
    }
    const saveArr = () => {
        if (currency) {
            setSavedArr({...savedArr, [currency]: [...savedArr[currency], currencyArr]})
        }
    }
    const checkRates = (latestRate) => {
        if (currencyArr.length > 0) {
            return currencyArr[0].currentCurrency < latestRate;
        } else {
            return 'none'
        }
    }
    const getTime = () => {
        const date = new Date();
        return `${
            date.getHours() <= 9 ? `0` + date.getHours() : date.getHours()}:${date.getMinutes() <= 9 ? `0` + date.getMinutes() :
            date.getMinutes()}:${date.getSeconds() <= 9 ? `0` + date.getSeconds() : date.getSeconds()}`
    }
    useEffect(() => {
        if (currency)
            for (let obj of savedArr[currency]) {
                for (let objElement of obj) {
                    setCurrencyArr((arr) => [...arr, objElement]);
                }
            }
    }, [currency])
    const myInterval = useRef();
    useEffect(() => {
        if (currency) {
            myInterval.current = setInterval(async () => {
                let latestCurrency = ((await ListService.getCurrency())[getIndex()].rate + Math.random()).toFixed(2)
                let curr = {
                    currentCurrency: latestCurrency,
                    time: getTime(),
                    isMoreThanPrevious: checkRates(latestCurrency)
                }
                setCurrencyArr(arr => [curr, ...arr]);
            }, 1000);
            return () => clearInterval(myInterval.current)
        }
    }, [currency, currencyArr])


    const setH1 = () => {
        if (currency === "EUR") {
            return "Euro"
        } else if (currency === "USD") {
            return "Dollar"
        } else if (currency === "PLN") {
            return "Zloty"
        } else {
            return "Choose a currency"
        }
    }

    return (
        <div>
            <select
                className={selectClasses.mySelect}
                onChange={(e) => {
                    saveArr();
                    setCurrency(e.target.value);
                    setCurrencyArr([]);
                }}
                value={currency}
            >
                <option disabled value="">Choose a currency</option>
                <option value="USD">Dollar</option>
                <option value="EUR">Euro</option>
                <option value="PLN">Zloty</option>
            </select>
            <MyButton onClick={() => clearInterval(myInterval.current)}>Stop</MyButton>
            <MyButton onClick={() => {
                clearInterval(myInterval.current);
                setCurrencyArr([]);
            }}>
                Clear
            </MyButton>
            <h2>{setH1()}</h2>
            <th>Rate</th>
            <th>Time</th>
            {currencyArr.map((selectedCurrency) =>
                <CurrencyTable latestCurrency={selectedCurrency.currentCurrency} time={selectedCurrency.time}
                               isMoreThanPrevious={selectedCurrency.isMoreThanPrevious} key={Math.random()}/>
            )}
        </div>
    );
};

export default CurrencySelect;


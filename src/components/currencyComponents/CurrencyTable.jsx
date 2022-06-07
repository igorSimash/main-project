import React, {useState} from 'react';

const CurrencyTable = (props) => {

    const getColor = () => {
        if (props.isMoreThanPrevious === true) {
            return '#02ff00'
        } else if (props.isMoreThanPrevious === 'none') {
            return 'black'
        } else {
            return 'red'
        }
    }
    return (
        <tr>
            <td style={{color: getColor()}}>{props.latestCurrency}</td>
            <td>{props.time}</td>
        </tr>
    );
};

export default CurrencyTable;
import React, {useState} from 'react';

const InputShower = () => {
    const [text, setText] = useState('Текст (0 букв).')
    let showInputInfo = (event) => {
        let value = event.target.value;
        setText(`${value} (${value.length} букв)`)
    }

    return (
        <div>
            <h1>{text}</h1>
            <input
                type="text"
                placeholder={'Вводьте текст'}
                onChange= {showInputInfo}
                />
        </div>
);
};

export default InputShower;
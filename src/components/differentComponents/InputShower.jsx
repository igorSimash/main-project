import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";

const InputShower = () => {
    const [text, setText] = useState('Текст.')
    let showInputInfo = (event) => {
        let value = event.target.value;
        setText(`${value} (${value.length} символів)`)
    }

    return (
        <div>
            <h1>
                {text}
            </h1>
            <MyInput
                type="text"
                placeholder={'Вводьте текст'}
                onChange={showInputInfo}
            />
        </div>
    );
};

export default InputShower;
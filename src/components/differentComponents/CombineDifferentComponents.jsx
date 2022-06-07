import React from 'react';
import Counter from "./Counter";
import InputShower from "./InputShower";

const CombineDifferentComponents = () => {
    return (
        <div>
            <Counter/>
            <InputShower/>
        </div>
    );
};

export default CombineDifferentComponents;
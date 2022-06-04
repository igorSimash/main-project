import React, {useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";

const ListForm = ({funcCreate}) => {
    const [list, setList] = useState({title: '', body: ''});

    const addNewList = (e) => {
        e.preventDefault();
        if(!list.title || !list.body) return;
        const newList = {
            ...list, id: Date.now()
        };
        funcCreate(newList);
        setList({title: '', body: ''});
    }

    return (
        <form className={'editor'}>
            <MyInput
                value={list.title}
                onChange={e => setList({...list, title: e.target.value})}
                type ="text"
                placeholder={"Назва"}/>
            <MyInput
                value={list.body}
                onChange={e => setList({...list, body: e.target.value})}
                type="text"
                placeholder={"Опис"}/>
            <MyButton onClick={addNewList}>Вставити</MyButton>
        </form>
    );
};

export default ListForm;
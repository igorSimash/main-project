import React, {useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";

const ListForm = ({funcCreate, id}) => {
    const [list, setList] = useState({title: '', body: ''});

    const addNewList = (e) => {
        e.preventDefault();
        if (!list.title || !list.body) return;
        const newList = {
            ...list, id: id - 1
        };
        funcCreate(newList);
        setList({title: '', body: ''});
    }

    return (
        <form className={'editor'}>
            <MyInput
                value={list.title}
                onChange={e => setList({...list, title: e.target.value})}
                type="text"
                placeholder={"Title"}/>
            <MyInput
                value={list.body}
                onChange={e => setList({...list, body: e.target.value})}
                type="text"
                placeholder={"Description"}/>
            <MyButton onClick={addNewList}>Insert</MyButton>
        </form>
    );
};

export default ListForm;
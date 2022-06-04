import React from 'react';
import MyButton from "./UI/button/MyButton";

const ListMaker = (props) => {


    return (
        <div className={'list'}>
            <div className={'list_content'}>
                <strong>{props.num}. {props.list.title}</strong>
                <div>
                    {props.list.body}
                </div>
            </div>
            <div className={'list_buttons'}>
                <MyButton onClick = {() => props.funcDelete(props.list)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default ListMaker;
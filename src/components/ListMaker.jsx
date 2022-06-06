import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const ListMaker = (props) => {
    const navigate = useNavigate()
    return (
        <div className={'list'}>
            <div className={'list_content'}>
                <strong>{props.list.id}. {props.list.title}</strong>
                <div>
                    {props.list.body}
                </div>
            </div>
            <div className={'list_buttons'} style={{display: "flex"}}>
                <MyButton onClick={() => navigate(`/lists/${props.list.id}`)}>Description</MyButton>
                <MyButton onClick = {() => props.funcDelete(props.list)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default ListMaker;
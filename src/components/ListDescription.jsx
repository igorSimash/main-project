import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import ListService from "../API/ListService";
import Loader from "./UI/loader/Loader";
import MyButton from "./UI/button/MyButton";

const ListDescription = () => {
    const [list, setList] = useState({})

    const param = useParams()
    const navigate = useNavigate()
    const [fetchLists, isLoading] = useFetch(async () => {
        const res = await ListService.getListById(param.id)
        setList(res)
    })
    useEffect(() => {
        fetchLists()
    }, [])
    return (
        <div>
            <h1>It is description for list №{param.id}</h1>
            {isLoading
            ? <Loader/>
            : <div><p>{list.id}.  {list.body}</p> <MyButton onClick={() => navigate('/lists')}>Back</MyButton> </div>}
        </div>
    );
};

export default ListDescription;
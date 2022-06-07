import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import ListService from "../../API/ListService";
import Loader from "../UI/loader/Loader";
import MyButton from "../UI/button/MyButton";
import {useFetch} from "../../hooks/useFetch";
import classes from "./List.module.css"

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
            <h1>Description for list №{param.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    <div className={classes.listDescription}>
                        <strong>
                            {list.id}.
                        </strong>
                        <p>
                            {list.body}
                        </p>
                    </div>
                    <MyButton onClick={() => navigate('/lists')}>Back</MyButton>
                </div>}
        </div>
    );
};

export default ListDescription;
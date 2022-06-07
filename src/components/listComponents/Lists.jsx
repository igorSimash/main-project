import React, {useEffect, useState} from 'react';
import ListFilter from "./ListFilter";
import ListPoster from "./ListPoster";
import {useFetch} from "../../hooks/useFetch";
import ListService from "../../API/ListService";
import {getPageCount} from "../utils/lists";
import {useLists} from "../../hooks/useLists";
import ListForm from "../UI/form/ListForm";
import Popup from "../UI/popup/Popup";
import MyButton from "../UI/button/MyButton";
import {ListContext} from "../context/context";
import Loader from "../UI/loader/Loader";
import classes from "./List.module.css"

const Lists = () => {
    const [lists, setLists] = useState([]);
    const [filter, setFilter] = useState({sort: '', params: ''})
    const [visibility, setVisibility] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [tempLimit, setTempLimit] = useState(10)
    const [page, setPage] = useState(1);
    const [fetchLists, isLoading] = useFetch(async () => {
        const res = await ListService.getLists(limit, page);
        setLists(res.data);
        setTotalPages(getPageCount(res.headers['x-total-count'], limit));
    })

    const creatList = (newList) => {
        setLists([...lists, newList]);
        setVisibility(false);
    };

    const sortedAndSearchedLists = useLists(filter.sort, lists, filter.params)

    const deleteList = (list) => setLists(lists.filter(l => l.id !== list.id))

    useEffect(() => {
        fetchLists();
    }, [page, limit])


    return (
        <div>
            <div className={classes.listRedactors}>
                <MyButton onClick={() => setVisibility(true)}>
                    Insert
                </MyButton>
                <Popup isVisible={visibility} setVisibility={setVisibility}>
                    <ListForm funcCreate={creatList}/>
                </Popup>
                <ListFilter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>
                :
                <ListContext.Provider value={{
                    page,
                    setPage,
                    setLimit,
                    tempLimit,
                    setTempLimit,
                    totalPages
                }}>
                    <ListPoster funcDelete={deleteList} title={'List №1'} lists={sortedAndSearchedLists}/>
                </ListContext.Provider>
            }
        </div>
    );
};

export default Lists;
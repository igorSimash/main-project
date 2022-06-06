import React, {useEffect, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import Popup from "./UI/popup/Popup";
import ListForm from "./UI/form/ListForm";
import ListFilter from "./ListFilter";
import Loader from "./UI/loader/Loader";
import ListPoster from "./ListPoster";
import {useFetch} from "../hooks/useFetch";
import ListService from "../API/ListService";
import {useLists} from "../hooks/useLists";
import {getPageCount} from "./utils/lists";

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

    useEffect ( () => {
        fetchLists();
    }, [page, limit])


    return (
        <div>
            <div className={'listRedactors'}>
                <MyButton onClick={() => setVisibility(true)}>
                    Вставити
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
                : <ListPoster funcDelete={deleteList} title={'Список номер 1'} lists={sortedAndSearchedLists} page={page}
                    nextPage={() => page < totalPages ? setPage(page + 1) : null}
                    prevPage={() => page > 1 ? setPage(page - 1) : null}
                    onChangeLimit={(e) => setTempLimit(e.target.value)}
                    onClickLimit={() => setLimit(tempLimit)}/>
            }
        </div>
    );
};

export default Lists;
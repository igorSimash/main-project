import React, {useContext} from 'react';
import RoundButton from "../button/RoundButton";
import classes from './ListSelector.module.css'
import SmallInput from "../input/SmallInput";
import MyButton from "../button/MyButton";
import {ListContext} from "../../context/context";

const ListSelector = () => {
    const {page, setPage, setLimit, tempLimit, setTempLimit, totalPages} = useContext(ListContext)
    return (
        <div style={{display: 'flex'}}>
            <RoundButton onClick={() => page > 1 ? setPage(page - 1) : null}> &lt; </RoundButton>
            <div className={classes.pageDiv}>{page}</div>
            <RoundButton onClick={() => page < totalPages ? setPage(page + 1) : null}> > </RoundButton>
            <SmallInput onChange={(e) => setTempLimit(e.target.value)} placeholder="Set Limit"/>
            <MyButton onClick={() => setLimit(tempLimit)}>Change limit</MyButton>
        </div>
    );
};

export default ListSelector;
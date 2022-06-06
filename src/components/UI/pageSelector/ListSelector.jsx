import React from 'react';
import RoundButton from "../button/RoundButton";
import classes from './ListSelector.module.css'
import SmallInput from "../input/SmallInput";
import MyButton from "../button/MyButton";

const ListSelector = ({nextPage, prevPage, page, onChangeLimit, onClickLimit}) => {
    return (
        <div style={{display: 'flex'}}>
            <RoundButton onClick={prevPage}> &lt; </RoundButton>
            <div className={classes.pageDiv}>{page}</div>
            <RoundButton onClick={nextPage}> > </RoundButton>
            <SmallInput onChange={onChangeLimit} placeholder="Set Limit"/>
            <MyButton onClick={onClickLimit}>Change limit</MyButton>
        </div>
    );
};

export default ListSelector;
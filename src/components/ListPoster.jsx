import React from 'react';
import ListMaker from "./ListMaker";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ListPoster = ({lists, title, funcDelete}) => {

    if(!lists.length){
        return <h1 style={{color:'red', }}>Список пустий</h1>
    }

    return (
        <div>
            <h1 style={{color: 'darkmagenta'}}>{title}</h1>
            <TransitionGroup>
                {lists.map((list, index) =>
                    <CSSTransition
                        key={list.id}
                        timeout={500}
                        classNames="list">
                        <ListMaker funcDelete={funcDelete} num={index + 1} list={list}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default ListPoster;
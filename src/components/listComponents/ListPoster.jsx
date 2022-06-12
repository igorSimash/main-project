import React from 'react';
import ListMaker from "./ListMaker";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ListSelector from "../UI/pageSelector/ListSelector";
import classes from "./List.module.css"

const ListPoster = ({lists, title, funcDelete}) => {
    if (!lists.length) {
        return <h1 style={{color: 'red',}}>List is empty</h1>
    }

    return (
        <div>
            <h1 style={{color: 'darkmagenta'}}>{title}</h1>
            <ListSelector/>
            <TransitionGroup>
                {lists.map((list, index) =>
                    <CSSTransition
                        key={list.id}
                        timeout={500}
                        classNames={"list"}
                    >
                        <ListMaker funcDelete={funcDelete} num={index + 1} list={list}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default ListPoster;
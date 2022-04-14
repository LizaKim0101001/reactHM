import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import LoadMore from "../loadmore/loadmore";
import { AppRoute } from "../../const";

const Board = ({mode})=>{
    let showSorting = true;
    if (mode === AppRoute.ARCHIVE || mode === AppRoute.EVENT) {
        showSorting = false
    } else if (mode === AppRoute.MAIN) {
        showSorting = true
    }
    let noEvents = false;
    if (mode === AppRoute.NOEVENTS) {
        noEvents=true;
    }

    return noEvents?(
        <section className="board">
            <div className="board__no-events">Нет ни одного события. Нажмите "Создать"</div>
        </section>
    ):(
        <section className="board">
            <Sorting show={showSorting}/>
            <div className={`board__events ${mode === AppRoute.ARCHIVE && 'board__events--archive'}`}>
                <Card/>
            </div>
            <LoadMore/>
        </section>
    )
}


export default Board
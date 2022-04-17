import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import LoadMore from "../loadmore/loadmore";
import { AppRoute } from "../../const";
import { useLocation, useParams } from "react-router-dom";

const Board = ()=>{
    const {pathname} = useLocation()
    const {id} = useParams()
    return id?(
        <section className="board">
            <Sorting/>
            <div className={`board__events ${pathname === AppRoute.ARCHIVE && 'board__events--archive'}`}>
                <Card/>
            </div>
            <LoadMore/>
        </section>
    ):(
        <section className="board">
            <div className="board__no-events">Нет ни одного события. Нажмите "Создать"</div>
        </section>
    )
}


export default Board
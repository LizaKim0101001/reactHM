import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import LoadMore from "../loadmore/loadmore";
import { AppRoute } from "../../const";

const Board = ({mode})=>{
    let isShow = true;
    if (mode === AppRoute.ARCHIVE) {
        isShow = false
    } else if (mode === AppRoute.MAIN) {
        isShow = true
    }
    return isShow?(
        <section className="board">
            <Sorting/>
            <div className="board__events">
                <Card/>
            </div>
            <LoadMore/>
        </section>
    ) : (
        <section className="board">
            <div className="board__events">
                <Card/>
            </div>
            <LoadMore/>
        </section>
    );
}

export default Board
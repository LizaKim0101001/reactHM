import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";

const Main =() =>{
    return(
        <main className="main">
            <Header mode = {AppRoute.NOEVENTS}/>
            <section className="main__wrapper">
                <Filter mode = {AppRoute.NOEVENTS}/>
                <Board mode = {AppRoute.NOEVENTS}/>
            </section>
        </main>
    )
}
export default Main
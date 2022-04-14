import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";

const Archive = ()=>{
    return(
        <main className="main">
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                <Board mode={AppRoute.ARCHIVE}/>
            </section>
        </main>
    )
}
export default Archive
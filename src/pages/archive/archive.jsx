import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";

const Archive = ()=>{
    return(
        <main className="main">
            <Header/>
            <section className="main__wrapper">
                <Board/>
            </section>
        </main>
    )
}
export default Archive
import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";

const Archive = ({events})=>{
    const archiveEvents = events.filter(x => x.archive)
    return(
        <>
            <Header/>
            <section className="main__wrapper">
                <Board events={archiveEvents}/>
            </section>
        </>
    )
}
export default Archive
import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import {observer} from "mobx-react-lite"
import { events } from "../../store";

const Main = observer(() =>{
    const {filteredData} = events
    return(
        <>
            <Header/>
            <section className="main__wrapper">
                <Filter/>
                <Board event={filteredData}/>
            </section>
        </>
    )
})
export default Main
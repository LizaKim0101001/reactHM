import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import {events} from "../../store/index"
import { observer } from "mobx-react-lite";

const Archive = observer(()=>{
    const {archiveData} = events;
    return(
        <>
            <Header/>
            <section className="main__wrapper">
                <Board event={archiveData}/>
            </section>
        </>
    )
})
export default Archive
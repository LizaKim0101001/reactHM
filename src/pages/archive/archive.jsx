import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";

const Archive = ()=>{
    return(
        <>
        <Header mode={AppRoute.ARCHIVE}/>
        <Board mode={AppRoute.ARCHIVE}/>
        </>
    )
}
export default Archive
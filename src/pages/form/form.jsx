import React from "react";
import Header from "../../components/header/header"
import { AppRoute } from "../../const";
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";

const Form = ()=>{
    return(
        <main className="main">
            <Header mode={AppRoute.EVENT}/>
            <section className="main__wrapper">
                <Filter mode={AppRoute.EVENT}/>
                <section className="board">
                    <Event/>
                </section>
            </section>
        </main>
    )
}
export default Form
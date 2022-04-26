import React from "react";
import Header from "../../components/header/header"
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";

const Form = ()=>{
    return(
    <>
        <Header />
        <section className="main__wrapper">
            <Filter />
            <section className="board">
                <Event/>
            </section>
        </section>
    </>
    )
}
export default Form
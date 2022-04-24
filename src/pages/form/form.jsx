import React from "react";
import Header from "../../components/header/header"
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";
import { observer } from "mobx-react-lite";

const Form = observer(()=>{

    return(
    <>
        <Header />
        <section className="main__wrapper">
            <Filter />
            <section className="board">
                <Event />

            </section>
        </section>
    </>
    )
})
export default Form
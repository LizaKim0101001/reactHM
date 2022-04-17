import React from "react";
import Header from "../../components/header/header"
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";

const Form = ()=>{
    return(
        <main className="main">
            <Header/>
            <section className="main__wrapper">
                <Filter/>
                <section className="board">
                    <Event />
                </section>
            </section>
        </main>
    )
}
export default Form
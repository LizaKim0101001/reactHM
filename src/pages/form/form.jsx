import React from "react";
import Header from "../../components/header/header"
import { AppRoute } from "../../const";
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";
import { useParams } from "react-router-dom";

const Form = (props)=>{
    const {id} = useParams()
    console.log(id);
    return(
        <main className="main">
            <Header mode={AppRoute.EVENT}/>
            <section className="main__wrapper">
                <Filter mode={AppRoute.EVENT}/>
                <section className="board">
                    <Event par={id}/>
                </section>
            </section>
        </main>
    )
}
export default Form
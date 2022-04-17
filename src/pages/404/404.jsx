import React from "react";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import "./style.css"

const Errors = ()=>{
    return(
        <>
        <section className="error_404">
            <h1 className="error_404__title">Ошибка при введение адресса.</h1>
            <h3 className="error_404__text">Если вы хотели попасть на наш сайт, нажмите на кнопку</h3>
            <Link to={AppRoute.MAIN}>
                <button className="error_404__btn btn-submit">Нажми на меня</button>
            </Link>
        </section>
        </>
    )
}

export default Errors
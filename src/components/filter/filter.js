import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useRouteMatch } from "react-router-dom";
import { events } from "../../store/index";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

const Filter = observer(() => {
  const {path} = useRouteMatch();
  const {notArchiveData, beforeDate, todayDate, afterDate, favoriteData} = events;
  const handleFilteres = action((e)=>{
    events.filteredData = events[e.target.value]
  });
    return (
        <section className="main__filter filter">
          <input
            type="radio"
            id="filter__all"
            className="filter__input visually-hidden"
            name="filter"
            defaultChecked
            disabled={!notArchiveData.length}
            onChange = {handleFilteres}
            value={"notArchiveData"}
          />
          <label htmlFor="filter__all" className="filter__label">
            Все <span className="filter__all-count count">{notArchiveData.length}</span></label
          >
          <input
            type="radio"
            id="filter__overdue"
            className="filter__input visually-hidden"
            name="filter"
            disabled={!beforeDate.length}
            onChange = {handleFilteres}
            value={"beforeDate"}
          />
          <label htmlFor="filter__overdue" className="filter__label"
            >Прошедшие <span className="filter__overdue-count count">{beforeDate.length}</span></label
          >
          <input
            type="radio"
            id="filter__today"
            className="filter__input visually-hidden"
            name="filter"
            disabled={!todayDate.length}
            onChange = {handleFilteres}
            value={"todayDate"}
          />
          <label htmlFor="filter__today" className="filter__label"
            >Сегодня <span className="filter__today-count count">{todayDate.length}</span></label
          >
          <input
            type="radio"
            id="filter__future"
            className="filter__input visually-hidden"
            name="filter"
            disabled={!afterDate.length}
            onChange = {handleFilteres}
            value={"afterDate"}
          />
          <label htmlFor="filter__future" className="filter__label"
            >Будущие <span className="filter__future-count count">{afterDate.length}</span></label
          >
          <input
            type="radio"
            id="filter__favorite"
            className="filter__input visually-hidden"
            name="filter"
            disabled={!favoriteData.length}
            onChange = {handleFilteres}
            value={"favoriteData"}
          />
          <label htmlFor="filter__favorite" className="filter__label"
            >Избранное <span className="filter__favorite-count count">{favoriteData.length}</span></label
          >
          {(path === AppRoute.MAIN) 
          && <Link to={AppRoute.ADD}>
              <button
                  name="control"
                  className="btn-add">
                  Создать
              </button>
            </Link> }
        </section>
    )
});

export default Filter;
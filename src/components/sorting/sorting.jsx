import React from "react";
import { useRouteMatch } from "react-router-dom";
import { AppRoute } from "../../const";

const Sorting = () =>{
  const {path} = useRouteMatch()
  let show;
  if (path === AppRoute.MAIN) {
    show = true;
  } else {
    show = false;
  }
    return show?(
         <div className="board__filter-list">
            <span className="board__filter--title">Сортировка:</span>
            <input
              type="radio"
              id="board__filter-default"
              className="board__filter visually-hidden"
              name="board-filter"
              checked
            />
            <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
            <input
              type="radio"
              id="board__filter-new"
              className="board__filter visually-hidden"
              name="board-filter"
            />
            <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
            <input
              type="radio"
              id="board__filter-old"
              className="board__filter visually-hidden"
              name="board-filter"
            />
            <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
          </div>
    ):null;
}
export default Sorting;
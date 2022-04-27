import React from "react";
import { events } from "../../store";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

const Sorting = observer(() =>{
  const handleSorting = action((e)=>{
    events.filteredData = events[e.target.value]
  });
    return (
         <div className="board__filter-list">
            <span className="board__filter--title">Сортировка:</span>
            <input
              type="radio"
              id="board__filter-default"
              className="board__filter visually-hidden"
              name="board-filter"
              defaultChecked
              value={"filteredData"}
              onChange={handleSorting}
            />
            <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
            <input
              type="radio"
              id="board__filter-new"
              className="board__filter visually-hidden"
              name="board-filter"
              value={"firstNew"}
              onChange={handleSorting}

            />
            <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
            <input
              type="radio"
              id="board__filter-old"
              className="board__filter visually-hidden"
              name="board-filter"
              value={"firstOld"}
              onChange={handleSorting}
            />
            <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
          </div>
    )
})
export default Sorting;
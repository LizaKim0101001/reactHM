import React from "react"
import moment from "moment";
import { useParams } from "react-router-dom";
const Event = ({events})=>{
    const {id} = useParams()
    let formatDate = new Date();
    let event ={}
    if (id) {
        event = events.find(event => event._id === id)
        formatDate = `${moment(event.date).format("YYYY-MM-DDTHH:mm")}`
    }
    return(
        <form className="board__form">
            <h2 className="board__title">{(event._id? `Редактирование событий` : `Добавление события`)}</h2>
            <fieldset className="board__field board__field--theme">
            <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
            <textarea
                type="text"
                className="board__input board__input--theme"
                name="theme"
                required
                defaultValue={event.theme}
            ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
            <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
            <textarea
                type="text"
                className="board__input board__input--comment"
                name="comment"
                required
                defaultValue={event.comment}
            ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
            <label htmlFor="date" className="board__label board__label--date">Дата:</label>
            <input
                type="datetime-local"
                className="board__input board__input--date"
                name="date"
                defaultValue={formatDate}
            />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">{event._id? `Сохранить`:`Добавить`}</button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    )
}

export default Event
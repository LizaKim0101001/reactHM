import React from "react"
import { events } from "../../store/index";
import moment from "moment";
import {useState} from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Event =  observer(()=>{
    const {id} = useParams()
    let formatDate = new Date()
    events.getEvent(id)
    const {date, comment, theme} = events.oneEvent
    formatDate = `${moment(date).format("YYYY-MM-DDTHH:mm")}`
    const [form, setForm] = useState({
        id,
        theme: '',
        comment: '',
        date: new Date(),
    })

    const handleAddEvent = (evt)=>{
        const {name, value} = evt.target
        setForm({...form, [name]:value})
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        if (id) {
            events.editEvent(form)

        } else {
            events.addEvent(form)

        }
    }
    return(
        <form className="board__form" onSubmit = {handleSubmit}>
            <h2 className="board__title">{(id? `Редактирование событий` : `Добавление события`)}</h2>
            <fieldset className="board__field board__field--theme">
            <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
            <textarea
                type="text"
                className="board__input board__input--theme"
                name="theme"
                required
                defaultValue={theme}
                onChange = {handleAddEvent}
            ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
            <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
            <textarea
                type="text"
                className="board__input board__input--comment"
                name="comment"
                required
                defaultValue={comment}
                onChange = {handleAddEvent}
            ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
            <label htmlFor="date" className="board__label board__label--date">Дата:</label>
            <input
                type="datetime-local"
                className="board__input board__input--date"
                name="date"
                defaultValue={formatDate}
                onChange = {handleAddEvent}
            />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">{id? `Сохранить`:`Добавить`}</button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    )
})

export default Event
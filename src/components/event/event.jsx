import React from "react"
import { events } from "../../store/index";
import {useState} from "react";
import moment from "moment";

const Event = ({id})=>{
    let formatDate = new Date();
    let eventEdit ={}
    if (id) {
        eventEdit = events.data.find(event => event._id === id)
        formatDate = `${moment(eventEdit.date).format("YYYY-MM-DDTHH:mm")}`
    }

    const [form, setForm] = useState({
        id: id,
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
            events.fetch()
        } else {
            events.addEvent(form)
            events.fetch()
        }
    }

    console.log(id);
    console.log(events);
    console.log(form);
    return(
        <form className="board__form" onSubmit={handleSubmit}>
            <h2 className="board__title">{(id? `Редактирование событий` : `Добавление события`)}</h2>
            <fieldset className="board__field board__field--theme">
            <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
            <textarea
                type="text"
                className="board__input board__input--theme"
                name="theme"
                required
                onChange={handleAddEvent}
            ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
            <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
            <textarea
                type="text"
                className="board__input board__input--comment"
                name="comment"
                required
                onChange={handleAddEvent}
            ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
            <label htmlFor="date" className="board__label board__label--date">Дата:</label>
            <input
                type="datetime-local"
                className="board__input board__input--date"
                name="date"
                defaultValue={formatDate}
                onChange={handleAddEvent}
            />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">{id? `Сохранить`:`Добавить`}</button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
        </form>
    )
}

export default Event
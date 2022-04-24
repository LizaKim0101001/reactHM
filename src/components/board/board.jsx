import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import { AppRoute } from "../../const";
import { useLocation} from "react-router-dom";
import { events } from "../../store/index";

const Board = ({event})=>{
    const {pathname} = useLocation()
    const handleToDeleteArchive = (evt)=>{
        evt.preventDefault()
        events.deleteArchive()
        events.fetch()
    }
    return (
        <section className="board">
            {(event.length>0)
            ? (<> 
                {(pathname === AppRoute.MAIN) && <Sorting />}                
                <div className={`board__events ${pathname === AppRoute.ARCHIVE && 'board__events--archive'}`}>
                    {event.map(event => <Card {...event} key={event._id} />)}
                </div>
                <button className="load-more" type="button">Загрузить еще</button>

                {(pathname === AppRoute.ARCHIVE) && (
                <button 
                    className="load-more" 
                    type="button" 
                    onClick={handleToDeleteArchive}
                >
                    Удалить все записи из архива
                </button>)}
                </>) 
            : <div className="board__no-events">Нет ни одного события. Нажмите "Создать"</div>
        }   
        </section>
    )
}
export default Board
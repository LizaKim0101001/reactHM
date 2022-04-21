import React from "react";
import Card from "../card/card";
import Sorting from "../sorting/sorting";
import LoadMore from "../loadmore/loadmore";
import { AppRoute } from "../../const";
import { useLocation} from "react-router-dom";

const Board = ({events})=>{
    const {pathname} = useLocation()
    return (
        <section className="board">
            {(events.length>0)
            ? (<> 
                {(pathname === AppRoute.MAIN) && <Sorting />}                
                <div className={`board__events ${pathname === AppRoute.ARCHIVE && 'board__events--archive'}`}>
                    {events.map(event => <Card {...event} key={event._id} />)}
                </div>
                <LoadMore />
                </>) 
            : <div className="board__no-events">Нет ни одного события. Нажмите "Создать"</div>
        }   
        </section>
    )
}


export default Board
import React from "react";
import { useParams } from "react-router-dom";

const Btns = ()=>{
    const {id} = useParams()

    const BtnText = ()=>{
        return id? `Сохранить`:`Добавить`
    }
    return(
        <div className="btns">
              <button type="submit" className="btn-submit">{BtnText()}</button>
              <button type="reset" className="btn-reset">Очистить</button>
        </div>
    )
}

export default Btns
import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { useRouteMatch } from "react-router-dom";

const CreateBtn = ()=>{
    let showCreateBtn;
    const {path} = useRouteMatch()
    if (path === AppRoute.MAIN) {
      showCreateBtn = true;
    } else{
      showCreateBtn = false;
    }
    return showCreateBtn?(
        <Link to={AppRoute.ADD}>
            <button
                name="control"
                className="btn-add">
                Создать
            </button>
        </Link>
    ):null;
}

export default CreateBtn
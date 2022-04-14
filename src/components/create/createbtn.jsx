import React from "react";

const CreateBtn = ({show})=>{
    return show?(
        <button
            name="control"
            className="btn-add">
            Создать
        </button>
    ):null;
}

export default CreateBtn
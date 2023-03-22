import React from "react";

const Note = ({note, updateImportance}) => {
    const label = note.important ? 'Make not important' : 'Make important'
    return(
        <li className="note">{note.content}
        <button type="button" onClick={updateImportance}> {label}</button>
        </li>
    )
}

export default Note

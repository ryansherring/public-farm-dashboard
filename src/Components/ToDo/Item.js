import React from "react";

const Note = ({ message, notes, id, deleteNote }) => {
  return (
    <div className="Note">
        {message}
        <button style={{marginLeft: "2%"}} onClick={() => deleteNote(id)}>x</button>
    </div>
  );
};

export default Note;

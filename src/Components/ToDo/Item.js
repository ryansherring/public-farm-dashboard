import React from "react";

const Item = ({ message, id, deleteNote }) => {
  return (
    <div className="Item">
        {message}
        <button style={{marginLeft: "2%"}} onClick={() => deleteNote(id)}>x</button>
    </div>
  );
};

export default Item;
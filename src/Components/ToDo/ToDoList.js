import React, { useState } from "react";
import Item from "./Item";
import { Card } from 'react-bootstrap'
// import "./todo.css"

const ToDoList = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([...notes, { id, message: input }]);
    setInput("");
  };

  const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter((note) => note.id != id));
  };

  return (
    <>
      {notes.length > 0 ? (
        <>
          <Card className="todo" style={{width: "70%", marginLeft: "15%"}}>
        <Card.Title>Farm To-Do-List</Card.Title>
        <Card.Body style={{padding: "0"}}>
            {notes.map((note) => (
              <Item
                message={note.message}
                id={note.id}
                deleteNote={(id) => deleteNote(id, notes, setNotes)}
              />
            ))}
            <form
              onSubmit={(e) =>
                handleSubmit(e, notes, setNotes, input, setInput)
              }
            >
              <input onChange={(e) => setInput(e.target.value)} value={input} />
              <button>add</button>
            </form>
            </Card.Body>
        
        </Card>
        </>
      ) : (
        <>
          <Card className="todo" style={{width: "70%", marginLeft: "15%"}}>
        <Card.Title>Farm To-Do-List</Card.Title>
        <Card.Body style={{padding: "0"}}>
          <p>Everything is currently taken care of!
                <br />
                As parts of the farm need attention, such as water level going
                too high, eratic sensor values, or weekly maintenance items, the
                list will automatically populate
              </p>
            <form
              onSubmit={(e) =>
                handleSubmit(e, notes, setNotes, input, setInput)
              }
            >
              <input onChange={(e) => setInput(e.target.value)} value={input} />
              <button>add</button>
            </form>
            </Card.Body>
        
        </Card>
        </>
      )}
    </>
  );
};
export default ToDoList;

import React, { useState } from "react";
import Item from "./Item";
import { Card } from "react-bootstrap";
// import "./todo.css"

const ToDoList = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [noteLength, setNoteLength] = useState(notes.length + 1);

  const handleSubmit = (e, notes, setNotes, input, setInput) => {
    e.preventDefault();
    const id = notes.length ? notes[notes.length - 1].id + 1 : 0;
    setNotes([...notes, { id, message: input }]);
    setInput("");
    setNoteLength(noteLength + 1);
    console.log(noteLength);
  };

  const deleteNote = (id, notes, setNotes) => {
    setNotes(notes.filter((note) => note.id != id));
    setNoteLength(noteLength - 1);
    console.log(noteLength);
  };

  return (
    <>
      {notes.length > 0 ? (
        <>
          <Card className="todo" style={{ width: "70%", marginLeft: "15%", marginTop: '2%', backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <Card.Title>Farm To-Do-List</Card.Title>
            <Card.Body style={{ padding: "0" }}>
              {notes.map((note) => (
                <Item
                  message={note.message}
                  id={note.id}
                  deleteNote={(id) => deleteNote(id, notes, setNotes)}
                />
              ))}
              <form
                style={{ padding: "0" }}
                onSubmit={(e) =>
                  handleSubmit(e, notes, setNotes, input, setInput)
                }
              >
                <input
                  placeholder="or add a custom item..."
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                {/* <button>add</button> */}
              </form>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <Card className="todo" style={{ width: "70%", marginLeft: "15%", backgroundColor: "rgba(255, 255, 255, 0.6)" }} data-aos="fade-up">
            <Card.Title>Farm To-Do-List</Card.Title>
            <Card.Body style={{ padding: "0" }}>
              <p>
                Everything is currently taken care of!
                <br />
                As parts of the farm need attention, such as water level going
                too high, eratic sensor values, or weekly maintenance items, the
                list will automatically populate
              </p>
              <form
                style={{ padding: "0" }}
                onSubmit={(e) =>
                  handleSubmit(e, notes, setNotes, input, setInput)
                }
              >
                <input
                  placeholder="or add a custom item..."
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                {/* <button>add</button> */}
              </form>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};
export default ToDoList;

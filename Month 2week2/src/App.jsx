import React, { useState } from "react";
import Form from './components/Form';
import './App.css'
function App() {
  const [show, setShow] = useState(true);
  const [notes, setNotes] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, note]);
    setShow(true);
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const editNote = (note, index) => {
    const newNotes = [...notes];
    newNotes[index] = note;
    setNotes(newNotes);
    setEditItem(null);
  };

  return (
    <div>
      {show && (
        <Form
          addNote={addNote}
          editNote={editNote}
          editItem={editItem}
        />
      )}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>Main: {note.main}</p>
            <p>SubTopic: {note.sub}</p>
            <p>Content: {note.content}</p>
            <button onClick={() => setEditItem(index)}>Edit</button>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShow(!show)}>Toggle Form</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const Form = ({ addNote, editNote, editItem }) => {
  const [main, setMain] = useState("");
  const [sub, setSub] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      main,
      sub,
      content
    };

    if (editItem) {
      editNote(note, editItem);
    } else {
      addNote(note);
    }

    setMain("");
    setSub("");
    setContent("");
  };

  return (
    <main>
      <form action="" className="ttform" onSubmit={(e) => handleSubmit(e)}>
        <h2>{editItem ? 'Edit Note' : 'Take Notes'}</h2>
        <input
          type="text"
          placeholder="Main"
          value={main}
          onChange={(e) => setMain(e.target.value)}
        />
        <input
          type="text"
          placeholder="SubTopic"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>{editItem ? 'Update' : 'Save'}</button>
      </form>
    </main>
  );
};

export default Form;

import React, { useState } from 'react';
import NoteService from '../services/notes';

function NoteForm({ user, setErrorMessage, addNewNote }) {
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = async (event) => {
    event.preventDefault();
    try {
      const note = await NoteService.create({
        note: newNote,
        user: { userName: user.userName },
        important: false,
      });
      addNewNote(note);
    } catch (exception) {
      setErrorMessage('unable to add note');
    }
  };

  return (
    <form onSubmit={addNote}>
      <input
        value={newNote}
        onChange={handleNoteChange}
      />
      <button type="submit">save</button>
    </form>
  );
}

export default NoteForm;

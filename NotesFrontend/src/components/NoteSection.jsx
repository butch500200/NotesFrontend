import React, { useEffect, useState } from 'react';
import DisplayNotes from './DisplayNotes';
import NoteForm from './NoteForm';
import noteService from '../services/notes';

function NoteSection({ user, setErrorMessage }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => {
        setNotes(initialNotes);
      });
  }, []);

  const addNewNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <NoteForm user={user} setErrorMessage={setErrorMessage} addNewNote={addNewNote} />
      <DisplayNotes notes={notes} setNotes={setNotes} setErrorMessage={setErrorMessage} />
    </>
  );
}

export default NoteSection;

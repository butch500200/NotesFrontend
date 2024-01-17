import React, { useEffect, useState } from 'react';
import Note from './Note';
import noteService from '../services/notes';

// eslint-disable-next-line react/prop-types
function DisplayNotes({ setErrorMessage, notes, setNotes }) {
  const [showAll, setShowAll] = useState(true);

  const toggleImportanceOf = (id) => {
    // eslint-disable-next-line react/prop-types
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((noteMap) => (noteMap.id !== id ? noteMap : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`,
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const notesToShow = showAll
    ? notes
  // eslint-disable-next-line react/prop-types
    : notes.filter((note) => note.important);

  return (
    <>
      <div>
        <button type="button" onClick={() => setShowAll(!showAll)}>
          show
          {' '}
          {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </>
  );
}

export default DisplayNotes;

import React from 'react';

function Note({ note, toggleImportance }) {
  const label = note.important
    ? 'make not important' : 'make important';

  return (
    <li className="note">
      {note.note}
      <button type="button" onClick={toggleImportance}>{label}</button>
    </li>
  );
}

export default Note;

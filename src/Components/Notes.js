import React, { useContext } from 'react';
import NoteContext from '../Context/noteContext'; // Corrected the import to use a different name
import NotesItem from './NotesItem';

function Notes() {
    const context = useContext(NoteContext); // Used the corrected import name here
    const { notes } = context; // Removed the unused setNotes variable

  return (
    <>
    <h2>Your Notes</h2>
     <div className='row my-3'>  
        {notes.map((note) => (
          <div key={note._id}>
            <NotesItem notes = {note} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Notes;
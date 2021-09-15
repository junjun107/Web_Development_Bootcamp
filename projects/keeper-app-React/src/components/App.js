import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NoteCard from './NoteCard';
import CreateNote from './CreateNote';

function App() {
  const [notes, setNotes] = useState([]);

  //pass addNote to CreateNote as onAdd
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  //pass deleteNote to NoteCard as Ondelete
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  console.log('delete clicked');
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteCard
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

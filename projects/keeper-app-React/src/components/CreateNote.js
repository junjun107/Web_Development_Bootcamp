import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateNote = (props) => {
  //for text input expansion styling
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const sumbitNote = (e) => {
    e.preventDefault();
    setNote({
      title: '',
      content: '',
    });
    props.onAdd(note);
  };

  //expan the textarea
  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name='content'
          placeholder='Write a Note'
          rows={isExpanded ? '3' : '1'}
          value={note.content}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={sumbitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;

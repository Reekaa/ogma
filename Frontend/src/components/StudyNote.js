import React from 'react';

const StudyNote = (props) => {
  return(
    <div id='study-note-card'>
    {props.noteItem.study_note_text}
    <button id='study-note-del'>Delete Note</button>
    </div>
  )
}

export default StudyNote;

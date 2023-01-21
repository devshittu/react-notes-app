import React from 'react'
import "../css/Note.css";
import Note from "./Note"

function Notes() {
  return (
    <div className="notes">
      <Note />
      <Note />
      <Note />
    </div>
  )
}

export default Notes
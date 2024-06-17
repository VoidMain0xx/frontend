import React from 'react'

function NotesItem(props) {
    const {notes} = props;
  return (
    <div > 
       <div className="col-md-3 card" >
  <div className="card-body">
    <h5 className="card-title">{notes.title}</h5>
    <p className="card-text">{notes.description}</p>
  </div>
</div>
    </div>
  )
}

export default NotesItem
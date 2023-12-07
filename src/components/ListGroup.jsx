import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import React from 'react';
import AddNoteImg from '/src/add-note-img.png'



const ListGroup = () => {


  const { allTodos } = useSelector((state) => state.todos);

  return (
    <div >
    {allTodos.length === 0 ? (
  <div className='empty-box'>
      <h2 className='ul-heading'>Add Notes</h2>
      <img src={AddNoteImg} alt="" /></div>
    ) : (
      <ul className='note-box'>
        {allTodos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    )}
  </div>
  )
}

export default ListGroup

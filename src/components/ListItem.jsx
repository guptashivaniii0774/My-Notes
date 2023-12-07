import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit, remove, Starred, update } from '../features/todo/todoSlice';
import { FaTrashAlt, FaPencilAlt, FaStar } from 'react-icons/fa';

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(todo.status === 'completed');

  const handleDelete = (id) => {
    if (!isCompleted && window.confirm('Are You Sure You Want To Delete?')) {
      dispatch(remove(id));
    }
  };

  const handleEdit = () => {
    dispatch(edit(todo));
  };

  const handleStar = () => {
    dispatch(
      Starred({
        id: todo.id,
        status: isCompleted ? 'pending' : 'completed',
      })
    );
    setIsCompleted(!isCompleted);
  };

  const handleUpdate = () => {
    dispatch(
      update({
        id: todo.id,
        text: todo.text,
        category: todo.category,
      })
    );
  };

  const getCategoryBackgroundColor = (category) => {
    switch (category) {
      case 'personal':
        return 'lightblue'; 
      case 'office':
        return 'lightgreen'; 
      case 'home':
        return 'lightcoral'; 
      default:
        return 'lightgray'; 
    }
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <li className='note'>
      <div className='inline-ops'>
        <p style={{ backgroundColor: getCategoryBackgroundColor(todo.category) }}>{todo.category}</p>
        <span>
          <button onClick={handleEdit}><FaPencilAlt /></button>
          <button onClick={() => handleDelete(todo.id)}><FaTrashAlt /></button>
          <button onClick={handleStar}><FaStar style={{ color: isCompleted ? 'orange' : 'rgb(128, 126, 126)' }} /></button>
        </span>
      </div>
      <h4 className='note-title'>{todo.headings}</h4>
      <p className='note-text'>{todo.text}</p>
      <p className='note-date'> {currentDate}</p>
    </li>
  );
};

export default ListItem;

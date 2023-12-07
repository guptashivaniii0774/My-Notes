import React, { useEffect, useState } from 'react';
import { add, update } from '../features/todo/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';


const Form = () => {
  const { edit } = useSelector((state) => state.todos);
  const [text, setText] = useState('');
  const [category, setCategory] = useState('personal');
  const [headings, setHeadings] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      const updatedTodo = {
        id: edit.todo.id,
        text: text,
        category: category,
        headings: headings,
      };
      dispatch(update(updatedTodo));
    } else {
      const newTodo = {
        id: crypto.randomUUID(),
        text: text,
        category: category,
        headings: headings,
      };
      dispatch(add(newTodo));
    }

    setText('');
    setCategory('personal');
    setHeadings('');
    setIsFormVisible(false);
  };

  useEffect(() => {
    setText(edit.todo.text);
    setCategory(edit.todo.category || 'personal');
    setHeadings(edit.todo.headings || '');
    setIsFormVisible(edit.isEdit);
  }, [edit]);

  return (
    <div className='Input-field'>
      {!isFormVisible && (
        <button className='add-btn' onClick={handleAddButtonClick}>
          <FaPlus />
        </button>
      )}

      {isFormVisible && (
        <form onSubmit={handleSubmit}>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value='personal'>Personal</option>
            <option value='office'>Office</option>
            <option value='home'>Home</option>
          </select>

          <input 
          type='text'
           required 
           placeholder='Title'
          value={headings} 
          onChange={(e) => setHeadings(e.target.value)} />


          <input
            type='text'
            required
            placeholder='What are you thinking...'
            value={text}
            onChange={(e) => setText(e.target.value)}/>


          <button className='submit' type='submit'>Add </button>
        </form>
      )}
    </div>
  );
};

export default Form;

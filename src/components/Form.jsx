 import React, { useEffect, useState } from 'react';
import { add, update } from '../features/todo/todoSlice';
import {useDispatch, useSelector} from 'react-redux';



const Form = () => {

const {edit} = useSelector(state => state.todos);
 
const [text , setText] = useState("")

const dispatch = useDispatch()

const handleSubmit = (e)=>{
  e.preventDefault()

if(edit.isEdit){
  const updatedTodo ={
id: edit.todo.id,
  text: text,
  };
  dispatch(update(updatedTodo));
}else{
  const newTodo = {
    id : crypto.randomUUID(),
    text : text,
  };
   dispatch(add(newTodo));

};
setText("");


};
 useEffect(()=>{
  setText(edit.todo.text);
 },[edit]); 



  return (
   <form className='d-flex 'onSubmit={handleSubmit}>
    <input className='form-control  w-75 p-3 my-3'  type="text" required placeholder='What are you thinking...' value={text} onChange={(e)=>setText(e.target.value)} />
    <button className='btn btn-dark w-25 my-3 mx-1 p-3'> Add Here</button>
   </form>
  )
}

export default Form

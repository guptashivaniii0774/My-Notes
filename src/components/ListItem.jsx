import React from 'react'
import {useDispatch} from 'react-redux';
import { edit,remove } from '../features/todo/todoSlice';


const ListItem = ({todo}) => {

  const dispatch = useDispatch()

  const handleDelete=(id)=>{
if(window.confirm("Are You Sure You Want To Delete?")){
  dispatch(remove(id));
}

  };
 const handleEdit = (todo)=>{
  dispatch(edit(todo));

 };


  return (
<li className="list-group-item bg-info p-3 m-3">{todo.text}
<button className=" btn btn-light btn-sm m-2 float-end" onClick={()=> handleEdit(todo)}> Edit</button>
<button className=" btn btn-light btn-sm m-2 float-end" onClick={()=> handleDelete(todo.id)}> Delete</button>


</li>
  )
}

export default ListItem

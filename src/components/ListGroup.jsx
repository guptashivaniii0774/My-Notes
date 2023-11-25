import  {useSelector} from 'react-redux';
import ListItem from './ListItem';
import React from 'react';



const ListGroup = () => {


const {allTodos} = useSelector((state) => state.todos);

  return (
    <ul className="list-group bg-warning">
 {allTodos.map((todo)=>( <ListItem key={todo.id} todo={todo}/>))}
    </ul>
  )
}

export default ListGroup

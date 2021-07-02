import React,{useState} from 'react'
import Todoform from './todoform'

function Todolist() {
   const[todos,setTodos]=useState([]);

   const addTodo =todo =>{
       if(!todo.text || /^\s*$/.test(todo.text))
       {
           return;
       }
   
   const newTodo=[todo, ...todos];

   setTodos(newTodo);
   console.log(todo, ...todos);
   };

    return (
        <div>
            <h1>my first todo</h1>
            <Todoform  onSubmit={addTodo}/>
        </div>
    )
}

export default Todolist

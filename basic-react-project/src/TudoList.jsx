import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let   [todos,setTodos]=useState([{task : "sample-task", id:uuidv4()}])
  let  [newTodo,setNewTodo]=useState(""); 

  let addNewTask= () =>{
      setTodos((prevTodos)=>{
        return [...prevTodos,{task: newTodo,id :uuidv4()}]
      });
      setNewTodo("");
  }   

  let updateTodoValue =(event)=>{
      setNewTodo(event.target.value);
  }

  let deleteTodo= (id) =>{
      setTodos( (prevTodos) => todos.filter((prevTodos)=> prevTodos.id !=id));
     
  }

  let upperCaseAll=() =>{
     setTodos ( (prevTodos) =>(
        prevTodos.map((todo) =>{
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        }))
       );
     };

 let upperCaseOne =(id) =>{
    setTodos ( (prevTodos) =>(
        prevTodos.map((todo) =>{
            if(todo.id==id){
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                  };
            }else {
                return todo;
            }
          
        }))
       );
 }

    return (
        <div>
            <input placeholder="add a task"
             value={newTodo}
            onChange={updateTodoValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
             
             <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map(todo=>(
                             <li key={todo.id}>
                                <span>{todo.task}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => (deleteTodo(todo.id))}>delete</button>
                                <button onClick={() => (upperCaseOne(todo.id))}>upperCaseOne</button>
                                </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}
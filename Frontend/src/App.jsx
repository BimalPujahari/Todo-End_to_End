import React, { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos';
function App() {
const[todos,setTodos]=useState([]);

fetch("http://localhost:3001/todos")
.then(async function(res){
  const json=await res.json();
  console.log(json);
  setTodos(json.response);
})

  return (
    <div>
      <CreateTodo/>
      <Todos todos={[{
       title:"go to gym",
       description:"exrecise daily for good health",
       completed:false
      }]}></Todos>
    </div> 
  )
}

export default App
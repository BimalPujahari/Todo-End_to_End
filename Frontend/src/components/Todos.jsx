import React from 'react'
//todos=array
//todos=[{title:"asa",description:"shssa"}]

export function Todos({todos}) {
return (
<div>
{
todos.map((todo)=>{
return <div>
<h1>{todo.title}</h1>
<h2>{todo.description}</h2>
<button>{todo.completed==true?"completed":"mark as Complete"}</button>
</div>
})
}
</div>
)
}



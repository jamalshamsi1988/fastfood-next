import { useEffect, useState } from "react"


export default function Home() {
  const[todos , setTodos]=useState([]);

  useEffect(()=>{
    async function fetchData (){
      const res= await fetch("/api/todos");
      const data= await res.json();
      setTodos(data)
    }
    fetchData();
  },[])
  return (
   <div>
    <ul>
      {todos.map((todo )=>(<li key={todo.id}>{todo.title}</li>))}
    </ul>
   </div>
  )
}

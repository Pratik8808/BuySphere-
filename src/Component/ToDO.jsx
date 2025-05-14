import React from 'react'
import "../assets/Style2.css"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const ToDO = () => {
    const [todo,setTodo]=useState([]);
    const [input,setinput]=useState("");

    const handlesubmit=()=>{
        
             setTodo((ptodo)=>{
                return  ptodo.concat({
                 text:input,
                 id:uuidv4(),
                 
                        
                }); 
               
     
             });
             
             setinput(""); 
        
       
    }
    const removetodo=id=>setTodo(todo=>todo.filter(t=>t.id != id));
    
  return (
    <div  className='container'>
        <input type="text" placeholder='enter todo' value={input}  onChange={(e)=>{setinput(e.target.value)}}/>
        <button onClick={handlesubmit}>add task</button>

      <ul className="todo-list">
        {todo.map(({text,id})=>(
           <li className="todo" key={id}><span>{text}</span>
               <button className=""onClick={()=>removetodo(id)}>x</button>
             </li>
        ))}
      </ul>
    
    </div>
  )
}

export default ToDO

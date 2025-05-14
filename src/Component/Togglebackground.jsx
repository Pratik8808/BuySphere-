import React from 'react'
import { useState } from 'react';
import "../assets/Style5.css"

const Togglebackground = () => {

    const [backgroundColor,setbackgroundColor]=useState('white');
   const [textColor, setTextcolor]=useState("#1b1b1b");
   const [buttonStyle,setButtonStyle]=useState("white");

   const handleclick=()=>{
    setbackgroundColor(backgroundColor==='white' ? '#1b1b1b':'white')
    setTextcolor(textColor==='#1b1b1b'?"#ffa31a":'#1b1b1b');
    setButtonStyle(backgroundColor==='white'?'#1b1b1b':'white')
     
   }
    
  return (
    <div style={{backgroundColor:backgroundColor,color:textColor}}>
        <button onClick={handleclick} style={{backgroundColor:buttonStyle,color:textColor,border:`2px solid ${textColor}`}}>
            {backgroundColor==='#1b1b1b'? 'Black theme' : "white theme"}
        </button>
     <section className="content">
        <h1>welcome to my channel</h1>
     </section>
      
    </div>
  )
}

export default Togglebackground

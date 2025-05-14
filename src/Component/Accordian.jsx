import React, { use, useState } from 'react'
import "../assets/Style8.css"
import { v4 as uuidv4 } from 'uuid';

const Accordian = ({title,content,index}) => {
   const [isActive,setActive]=useState(false);

  return (
    <section className='accordian-card' key={index}>
     <div className="header" onClick={()=>setActive(!isActive)}>
       <div>{title}</div>
         <p className='icon'>{isActive ? '-':"+"}</p>  
     </div>
     <div className="content">
        {isActive && <p className='card-info'>{content}</p>}
     </div>

    </section>
  )
}

export default Accordian

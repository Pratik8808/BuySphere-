import React, { useState } from 'react'
import "../assets/Style6.css"
import {FaSearch} from "react-icons/fa"

const HiddenSerachar = () => {
    const [showInput,setInput]=useState(false);
    const [bgcolor,setbgcolor]=useState('white');

   const handleclick=((e)=>{
       setbgcolor('#1a1a1a')
    
     if(e.target.className==='container'){

      
        setInput(false);
        setbgcolor('#fff');
     }
   })

  return (
    <section className='container'style={{backgroundColor:bgcolor}} onClick={handleclick}>

        {showInput?(
            <input type="text" placeholder='serach..' />
        ):(
            <FaSearch onClick={(e)=>{ setInput(true);}}/>
        )}
    
       

    </section>
  )
}

export default HiddenSerachar

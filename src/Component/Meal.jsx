import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../assets/Style3.css"

const Meal = () => {
  const [item,setitem]=useState([]);

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res=>{
        // console.log(res.data);
        setitem(res.data.meals)

       
    }).catch((err)=>{
        console.log(err);
    })
    
  },[]);

  const itemlist=item.map(({strMeal,strMealThumb,idMeal})=>{

    return (
        <section className='card' >
            <img src={strMealThumb} alt="meal" />
           <section className="content">
            <p>{strMeal}</p>
           <p>#{idMeal}</p>
           </section>
        </section>
      )
  })

  return <div className="items-container">
    {itemlist}
  </div>

}

export default Meal;

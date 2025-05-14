import React, { useState, useEffect } from 'react'
import ProductContext from './Product'
import Products from './Products/Products'
import Recommeded from './Recommeded/Recommeded'
import Nav from './Navigation/Nav'
import Sidebar from '../src/Sidebar/Sidebar'







const App = () => {
    const[product,setproducts]=useState([]);
    const url=import.meta.env.VITE_URL
    console.log("API:",url)

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            setproducts(data)
            console.log(data)
        })
        .catch((err)=>{
            console.log("some error occur while fetching");
        })
        
    },[]);


  return (
    <div>
      <ProductContext.Provider value={product}>
        <Nav/>
        <Recommeded/>
        
        <Sidebar/>
        <Products/>
       

      </ProductContext.Provider>
    </div>
  )
}

export default App














// return (
//   < className="container">
//   < className='accordion'>
//     {accordionData.map(({title,content},index)=>(
//       <Accordian  key={index}  title={title} content={content}/>
//     ))}
//     </>
//   </>
  
// )
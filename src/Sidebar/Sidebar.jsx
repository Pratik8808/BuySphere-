import React from 'react'

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from 'react-icons/bi';
import Category from "./Category/Category.jsx"
import Price from "./Price/Price.jsx"


import "./Sidebar.css"





const Sidebar = () => {
  return (
    <>

    <section className="sidebar">
        <div className="logo-container">
            <h1><AiOutlineShoppingCart /></h1>
        </div>
       <Category/>
       <Price/>
     

    </section>
    </>
  )
}

export default Sidebar

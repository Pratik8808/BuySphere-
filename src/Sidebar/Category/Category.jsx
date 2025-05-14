import { useEffect, useState } from "react"
import "../Category/Category.css"

const Category = () => {
  const [categories, setCategories] = useState("All")
  useEffect(()=>{
    const data=useContext(ProductContext);
     CategoryChange(())

  },[])

  return (
    <div>
     <h2 className="sidebar-title">
     Category
     </h2>
     <div>

      <label className="sidebar-label-container">
      <input type="radio" name="test" onClick={()=>{CategoryChange("All")}}/>
      <span className="checkmark"></span>All
      </label>


      <label    className="sidebar-label-container">
      <input type="radio" name="test"  onClick={()=>{CategoryChange("men's clothing")}} />
      <span className="checkmark"></span>men's clothing
      </label>

      <label className="sidebar-label-container">
      <input type="radio" name="test" onClick={()=>{CategoryChange("jewelery")}}/>
      <span className="checkmark"></span>jewelery
      </label>

      <label className="sidebar-label-container">
      <input type="radio" name="test" onClick={()=>{Categorychange("electronics")}}/>
      <span className="checkmark"></span>electronics
      </label>

     
      
     </div>
    </div>
  )
}

export default Category

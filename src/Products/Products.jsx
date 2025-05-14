  import { AiFillStar } from "react-icons/ai"
  import "../Products/Product.css"
  import { LiaShoppingBagSolid } from "react-icons/lia";
  import { useContext } from "react";
  import ProductContext from "../Product";
  import { FaRupeeSign } from "react-icons/fa";

  const Products = () => {
    const products=useContext(ProductContext);



    
    return (
      <>
      {products ? (
         <section className="card-container">
          {products.map((products)=>(
                  <section className="card" key={products.id}>
                  <img  className="card-img" src={products.image} alt="Shoe" />
                <div className="card-details">
                    <h3 className="card-title">{products.title}</h3>
       
                        <section className="card-reviews">
                        <AiFillStar className="rating-star"/><AiFillStar />
                        <span className="total-reviews">{products.rating.count}</span>
                        </section>
       
                        <section className="card-price">
                          <div className="price">
                          <FaRupeeSign /> {products.price} 
                          
       
                          </div>
                          <div className="bag">
                            <LiaShoppingBagSolid   className="bag-icon"/>

                          </div>
                        </section>
                        <div className="category">
                         <h4>{products.category}</h4>
                          
                        </div>
                        
                  </div>
                </section>
          ))}
        
       </section>
       
      )
      :(<section className="error">
         <h1> There is error internal server</h1> 
        
      </section>)
      }
       
      </>
    )
  }

  export default Products

























































  // import "./Product.css";
  // import

  // const Products = ({ result }) => {
  //   return (
  //     <>
  //       <section className="card-container">{result}</section>
  //     </>
  //   );
  // };

  // export default Products;
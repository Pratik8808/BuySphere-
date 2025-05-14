import { TfiHeart } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";

import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "../Navigation/nav.css"

const Nav= ()=>{
    return(
        <nav>
            <div className="nav-container">
                <input type="text"className="serach-input" placeholder="enter your serach shoes" />
            </div>
            <div className="profile-container">      
               <a href="#"><TfiHeart className="nav-icons"/></a>

                <a href="#"> 
                  <CiShoppingCart className="nav-icons"/>  </a>

                  <a href="#"> 
                  <AiOutlineUserAdd className="nav-icons"/>  </a>
            </div>  
        </nav>

   
    )

};

export default Nav;
















// const Nav = ({ handleInputChange, query }) => {
//     return (
//       <nav>
//         <nav className="nav-container">
//           <input
//             className="search-input"
//             type="text"
//             onChange={handleInputChange}
//             value={query}
//             placeholder="Enter your search shoes."
//           />
//         </nav>
//         <nav className="profile-container">
//           <a href="#">
//             <FiHeart className="nav-icons" />
//           </a>
//           <a href="">
//             <AiOutlineShoppingCart className="nav-icons" />
//           </a>
//           <a href="">
//             <AiOutlineUserAdd className="nav-icons" />
//           </a>
//         </nav>
//       </nav>
//     );
//   };
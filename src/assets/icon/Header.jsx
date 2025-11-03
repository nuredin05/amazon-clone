import icn1 from  "../../assets/icon/amazon.png"
import icn2 from  "../../assets/icon/search-icon.png"
import icn3 from  "../../assets/icon/cart.png"
import me from  "../../assets/icon/me.jpg"
import arrow from  "../../assets/icon/down-arrow.png"
import { FaSearch } from 'react-icons/fa';
import React from "react";
import './header.css'
function Header() {
  return (
    <>
          <div className="">
                <a href="/"><img src={logo} alt="" /></a>

                {/* delivery */}
                <span> {/* icon */}</span>
                <div> Delivered To</div>
                <span>Ethiopia</span>
            <div >
                {/* search */}
                <select name="" id="">
                    <option value="">All</option>
                     <option value="">chose</option>
                     
                </select>
                <input type="text" placeholder="search" />
                     {/* icone */}
            </div>
            {/* right side */}
            <div>
                <img src="" alt="" />
                <select name="" id="">
                    <option value="En">EN</option>
                </select>
            </div>
            {/* three component */}
            <a href="">
                <div><p>sign in</p>
                <span>Account $ Lists</span></div>
            </a>
            {/* orders */}
            <a href="">
                <p>Returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
            {/* icon */}
            <span>0</span>
            </a>

          </div>
  
    </>
  );
}

export default Header;
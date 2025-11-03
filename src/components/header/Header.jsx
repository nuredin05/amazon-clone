import logo from  "../../assets/icon/amazon.png"
import icn2 from  "../../assets/icon/search-icon.png"

import { BsSearch } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { BiCart } from 'react-icons/bi';
import React from "react";
import classes from'./header.module.css'
import LowerHeader from "./LowerHeader";
function Header() {
  return (
   
    <>
          <div className={classes.container_wrapper}>
            <div className={classes.logo_container}>
                <a href="/"><img src={logo} alt="" /></a>
             
                {/* delivery */}
                <div className={classes.delivery}>
                    <span> < SlLocationPin/></span>
                    <div >
                        <p>Delivered To</p>
                        <span>Ethiopia</span>
                    </div>
                 </div>
            </div>
                {/* search */}
                <div className={classes.search}>
                    <select name="" id="">
                        <option value="">All</option>
                        <option value="">chose</option>
                    </select>
                    <input type="text" placeholder="search" />
                     <BsSearch size={25} />
                 </div>
            {/* other section */}
            <div className={classes.order_container}> 
                <a href="" className={classes.language}> <img src={icn2} alt="" />
                <select name="" id="">
                    <option value="En">EN</option>
                </select>
                </a>
            {/* three component */}
            <a href="">
                <p>sign in</p>
                <span>Account $ Lists</span>
            </a>
            {/* orders */}
            <a href="">
                <p>Returns</p>
                <span>& Orders</span>
            </a>
            {/* cart */}
            <a href=""className={classes.cart}>
           < BiCart size={35} />
            <span>0</span>
            </a>

          </div>
          
          </div>
  <LowerHeader/>
    </>
  );
}

export default Header;
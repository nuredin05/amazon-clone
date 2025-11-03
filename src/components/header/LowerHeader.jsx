

import React from "react";
import classes from'./header.module.css'
import { AiOutlineMenu } from 'react-icons/ai';


function LowerHeader() {
  return (
   <div className={classes.lower_container}>
        <ul>
            <li>
                <AiOutlineMenu />
                <p>All</p></li>
            <li>Todays Deal</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Card's</li>
            <li>Sell</li>
        </ul>
   </div>
   
  );
}export default LowerHeader;


import React from 'react'
import classes from './catacory.module.css'
function CategoryCard({data}) {
  return (
    <div className={classes.category}> 
         <a href="">
            <span><h2>{data.tittle}</h2></span>
            <img src={data.imgLink} alt="" />
            <p>Shop Now</p>
        </a>
        <h1>img 1</h1>
    </div>
  )
}export default  CategoryCard;

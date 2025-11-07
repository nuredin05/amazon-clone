import React from 'react'
import classes from './category.module.css'
import { Link } from 'react-router-dom';
// import { categoryInfos } from './categoryfullInf';
function CategoryCard({data}) {
  console.log(data);
  return (
    <div className={classes.category}> 
          <Link to={`/category/${data.name}`}>
            <span><h2>{data?.title}</h2></span>
            <img src={data?.image } alt={data.title} className={classes.image}
      />

            <p>Shop Now</p>
        </Link>

    </div>
  )
}export default  CategoryCard;

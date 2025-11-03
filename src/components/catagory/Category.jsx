import React from 'react'
import classes from './catacory.module.css'
import {categoryInfos} from './categoryfullInf'
import CategoryCard from './CategoryCard'
 function Category() {
  return (
    
    <section className={classes.category_container}>
      
        {
            categoryInfos.map((infos)=>{
                <CategoryCard data= {infos} />
            })
        }
        <h2>img2 fromcat</h2>
    </section>
  )
}
export default Category;
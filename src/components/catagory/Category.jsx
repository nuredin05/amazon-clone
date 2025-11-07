import React from 'react';
import classes from './category.module.css';
import { categoryInfos } from './categoryfullInf';
import CategoryCard from './CategoryCard';

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Category;

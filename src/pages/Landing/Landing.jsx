import React from 'react';
import LayOut from '../../components/layout/LayOut'
import Carousel from '../../components/caraousel/CarouselEffect';
import Category from '../../components/catagory/Category';
import Product from '../../components/product/Product';

function Landing() {
  return (
    <div>
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default Landing;

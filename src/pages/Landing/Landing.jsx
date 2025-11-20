import React from "react";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import Layout from "../../components/Layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <CarouselComponent />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;

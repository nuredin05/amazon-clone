import React, { useEffect, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Utility/endPoints";
import axios from "axios";
import ProductCard from "../../Component/Product/ProductCard";
import Loader from "../../Component/Loader/Loader";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard 
        product={product} 
        flex={true} 
        renderDesc={true} 
        renderAdd={false}/>
      )}
    </Layout>
  );
};

export default ProductDetails;

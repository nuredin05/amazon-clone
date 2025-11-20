import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../utils/endPoints";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
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
        renderAdd={true}/>
      )}
    </Layout>
  );
};

export default ProductDetails;

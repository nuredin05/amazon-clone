import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductUrl } from "../../../api/endPoints";
import Product from "../../components/product/Product";
import ProductCard from "../../components/product/ProductCard";

import classes from "./result.module.css";
export default function Result() {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section>
        <h1 style={{ padding: "30px" }}> results </h1>
        <p style={{ padding: "30px" }}> category /{categoryName} </p>
        <hr />
        <div className={classes.productsf_container}>
          {result?.map((Product) => (
            <ProductCard
              key={Product.id}
              Product={Product}
              // renderDesc={false}
              // renderAdd={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

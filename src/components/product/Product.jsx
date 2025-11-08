import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <section className={classes.products_container}>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        products.map((producty) => (
          <ProductCard key={producty.id} Product={producty} />
        ))
      )}
    </section>
  );
}

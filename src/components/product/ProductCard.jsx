import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ Product }) {
  const { image, title, id, rating, price } = Product;
  console.log(Product);

  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>
            <span>{rating?.rate || 0}</span>
          </small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

import React, { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, productDesc }) {
  const [state, dispatch] = useContext(DataContext); // Destructure as an array
  const { image, title, id, rating, price, description, renderAdd } = product;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.list_container} ${
        flex ? classes.flex_container : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h5>{title}</h5>
        {productDesc && <div className={classes.desc}>{description}</div>}
        <div className={classes.rating}>
          {rating && <Rating value={rating.rate} precision={0.1} />}
          {rating && <small>{rating.count}</small>}
        </div>
        <CurrencyFormat amount={price} />
      </div>
      {renderAdd && (
        <button className={classes.button} onClick={addToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;

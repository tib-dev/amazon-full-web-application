import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  const { title, imgLink, name } = data;
  return (
    <div className={classes.category}>
      <Link to={`/category/${name}`}>
        <span>
          <h4>{title}</h4>
        </span>
        <img src={imgLink} alt={title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;

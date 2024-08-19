import React, { useState, useEffect } from "react";
import classes from "./Result.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Components/Endpionts/endPoints";
import { Loader } from "../../Components/Loader/Loader";
function Results() {
  const { categoryName } = useParams();
  const [category, setCategory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    console.log("Category Name:", categoryName);
    axios.get(`${productUrl}/products/category/${categoryName}`).then((res) => {
      setCategory(res.data);
      setisLoading(false);
    });
  }, [categoryName]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.product_container}>
            {category?.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={{ ...product, renderAdd: true }}
                  productDesc={false}
                  style={{ padding: "30px" }}
                />
              );
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;

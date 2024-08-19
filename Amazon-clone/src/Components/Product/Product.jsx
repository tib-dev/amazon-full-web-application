import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./product.module.css";
import { productUrl } from "../Endpionts/endPoints";
import { FiLoader } from "react-icons/fi";

function Product() {
  const [isLoading, setIsLoading] = useState(true); // Initialize as true to show loader initially
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${productUrl}/products`);
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products, please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading_section}>
        <FiLoader className={classes.loader} />
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.error_section}>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section>
      <div className={classes.product_container}>
        {products.map((product) => (
          <ProductCard
            product={{ ...product, renderAdd: true }}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Product;

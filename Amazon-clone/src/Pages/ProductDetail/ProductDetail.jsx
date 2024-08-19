import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import { productUrl } from "../../Components/Endpionts/endPoints";

function ProductDetail() {
  const { productId } = useParams();
  {
    console.log(productId);
  }
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        {
          console.log(res.data);
        }
      })
      .catch((err) => {
        {
          console.error(err);
        }
      }),
      [];
  });

  return (
    <Layout>
      <ProductCard
        product={product}
        renderAdd={true}
        renderDesc={true}
        flex={true}
      />
    </Layout>
  );
}
export default ProductDetail;

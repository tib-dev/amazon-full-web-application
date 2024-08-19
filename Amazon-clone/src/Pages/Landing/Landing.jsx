import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Main/Category/Category";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";
import LoginLink from "../../Components/LoginLink/LoginLink";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
      < LoginLink/>
    </Layout>
  );
}

export default Landing;

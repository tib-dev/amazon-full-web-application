import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import SignIn from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Orders";
import Results from "../Pages/Results/Results";
import Cart from "../Pages/Cart/Cart";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Four4 from "../Pages/404/Four4";
import Lang from "../Pages/Language/Lang";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignIn />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/language" element={<Lang />} />
      <Route path="*" element={<Four4 />} />
    </Routes>
  );
}

export default Routing;

import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./cart.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { DataContext } from "../../Components/DataProvider/DataProvider"; // Ensure correct import

function Cart() {
  const [state, dispatch] = useContext(DataContext); // Destructure correctly

  const { basket = [], user } = state; // Provide default value to avoid errors

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { ...item, amount: item.amount + 1 },
    });
  };

  const decrement = (item) => {
    if (item.amount > 1) {
      dispatch({
        type: Type.REMOVE_FROM_BASKET,
        id: item.id,
      });
    }
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello, {user?.email.split("@")[0] || "Guest"}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item) => (
              <div className={classes.cart_product} key={item.id}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button onClick={() => increment(item)}>
                    <MdKeyboardArrowUp />
                  </button>
                  <span>{item.amount}</span>
                  <button onClick={() => decrement(item)}>
                    <MdKeyboardArrowDown />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div className={classes.total_price}>
              <p>subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;

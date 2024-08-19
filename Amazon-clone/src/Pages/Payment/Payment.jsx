import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css"; // Ensure this CSS file is styled accordingly
import { Link } from "react-router-dom";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission logic here
    console.log("Payment Info:", {
      cardNumber,
      expiryDate,
      cvv,
      billingAddress,
    });
  };

  return (
    <Layout>
      <section className={classes.payment}>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="amazon"
          />
        </Link>
        <div className={classes.payment_container}>
          <h1>Payment Details</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardNumber">Credit Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                required
              />
            </div>
            <div>
              <label htmlFor="billingAddress">Billing Address</label>
              <input
                type="text"
                id="billingAddress"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                placeholder="123 Main St, City, State, ZIP"
                required
              />
            </div>
            <button type="submit" className={classes.submit_button}>
              Pay Now
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;

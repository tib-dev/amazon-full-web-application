import React from "react";
import classes from "./loginAndRegister.module.css";
import { Link } from "react-router-dom";
function LoginLink() {
  return (
    <div className={classes.signIn_register_link_container}>
      <div className={classes.title}>
        <p>See personalized recommendations</p>
      </div>
      <Link to="/auth" className={classes.signIn_link}>
        sign in
      </Link>
      <div className={classes.signUp_link}>
        <p>
          New customer?<Link to="/auth">Start here.</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginLink;

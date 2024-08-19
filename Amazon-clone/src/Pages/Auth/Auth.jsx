import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./auth.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [state, dispatch] = useContext(DataContext); // Use state and dispatch
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const navigate = useNavigate();

  const authHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(""); // Reset error state on new submission

    if (e.nativeEvent.submitter.name === "signIn") {
      setLoading({ signIn: true, signUp: false });
      try {
        const userInfo = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER,
          payload: userInfo.user,
        });
        navigate("/"); // Navigate to home page after successful sign-in
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading({ signIn: false, signUp: false });
      }
    } else if (e.nativeEvent.submitter.name === "signUp") {
      setLoading({ signIn: false, signUp: true });
      try {
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch({
          type: Type.SET_USER,
          payload: userInfo.user,
        });
        navigate("/"); // Navigate to home page after successful sign-up
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading({ signIn: false, signUp: false });
      }
    }
  };

  return (
    <div className={classes.auth_wrapper}>
      <div className={classes.logo}>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
          />
        </Link>
      </div>
      <div className={classes.form_wrapper}>
        <h1>Sign In</h1>
        <form onSubmit={authHandler}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              id="password"
            />
          </div>
          <button type="submit" name="signIn" className={classes.button_signIn}>
            {loading.signIn ? (
              <ClipLoader size={15} color={"#000"} loading />
            ) : (
              "Sign In"
            )}
          </button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button type="submit" name="signUp" className={classes.button_signUp}>
            {loading.signUp ? (
              <ClipLoader size={15} color={"#123abc"} loading />
            ) : (
              " Create your Amazon Account"
            )}
          </button>
          <p>
            Forgot your password?
            <Link to="/forgot-password">Reset Password</Link>
          </p>
          {<small style={{ paddingTop: "5px", color: "red" }}>{error}</small>}
        </form>
      </div>
    </div>
  );
}

export default Auth;

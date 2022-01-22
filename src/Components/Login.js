import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>

        <form action="" className="form">
          <h5>E-mail</h5>
          <input
            type="text"
            className="username"
            placeholder="Enter your E-mail ID"
          />
          <h5>Password</h5>
          <input
            type="password"
            className="password"
            placeholder="Enter your password"
          />
          <button className="login-button">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="create-account">Create an Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;

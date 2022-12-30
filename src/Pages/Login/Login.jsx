import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="header">
          <h1>Welcome back!</h1>
        </div>
        <div className="form">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />

          <button>Login</button>
        </div>
        <div className="bottom">
          <span>
            Don't you have an account?{" "}
            <Link className="link" to={"/register"}>
              Register from here.
            </Link>
          </span>
          <span>
            <Link to={"/"} className="link red">
              Homepage
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";
import "./NUFooter.scss";

const NUFooter = () => {
  return (
    <div className="nuFooter">
      <div className="left">
        <h3>Don't miss the latest meows!</h3>
      </div>
      <div className="right">
        <div className="buttons">
          <Link to={"/login"} className="link">
            <button className="loginBtn">Login</button>
          </Link>
          <Link to={"/register"} className="link">
            <button className="registerBtn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NUFooter;

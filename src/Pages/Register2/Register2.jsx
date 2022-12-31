import React from "react";
import { Link } from "react-router-dom";
import "./Register2.scss";

const Register2 = () => {
  return (
    <div className="register2">
      <div className="container">
        <div className="left">
          <h1>Join our family</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            reprehenderit odit officiis voluptas, ad totam iure nulla modi
            aperiam cumque laudantium, explicabo voluptatum! Et, aliquam
            perspiciatis aspernatur libero dolorum cupiditate.
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"} className="link">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              style={{ display: "none" }}
              type="file"
              name="profilePic"
              id="profilePic"
            />
            <label htmlFor="profilePic">Upload Picture</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register2;

import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="header">
          <h1>
            Join <span style={{ color: "#00aaaa" }}>kittyfeed</span> Now!
          </h1>
        </div>
        <div className="form">
          <div className="profilePic">
            <input
              style={{ display: "none" }}
              id="profile_pic"
              name="profile_pic"
              type="file"
            />
            <label htmlFor="profile_pic"></label>
            <p>Add Profile Picture</p>
          </div>
          <input type="text" name="username" placeholder="Username" />

          <input type="text" name="name" placeholder="Name" />

          <input type="password" name="password" placeholder="Password" />

          <button>Register</button>
        </div>
        <div className="bottom">
          <span>
            Do you have an account?{" "}
            <Link className="link" to={"/login"}>
              Login here.
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

export default Register;

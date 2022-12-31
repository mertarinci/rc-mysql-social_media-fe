import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./Login2.scss";

const Login2 = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Handle Functions

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login2">
      <div className="container">
        <div className="left">
          <h1>Welcome Back!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            reprehenderit odit officiis voluptas, ad totam iure nulla modi
            aperiam cumque laudantium, explicabo voluptatum! Et, aliquam
            perspiciatis aspernatur libero dolorum cupiditate.
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"} className="link">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <p style={{ color: "orange" }}>{err}</p>
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login2;

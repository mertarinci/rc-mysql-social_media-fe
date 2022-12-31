import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./Register2.scss";

const Register2 = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });
  const [file, setFile] = useState(null);
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8080/api/upload",
        formData
      );
      return res.data;
    } catch (err) {
      alert(err.response.data);
    }
  };

  // Handle Functions

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    console.log(imgUrl);
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        ...input,
        profile_img: imgUrl,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

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
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="profilePic">Upload Picture</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Register</button>
            {err}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register2;

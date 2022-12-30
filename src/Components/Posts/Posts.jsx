import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.scss";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="posts">
      <div id="write" className="write">
        <div className="container">
          <div className="top">
            <div className="left">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
              />
            </div>
            <div className="middle">
              <p>Mert Arinci</p>
              <textarea
                type="text"
                placeholder="Write here and share your meow to world!"
                maxLength={250}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="links">
                <i class="fa-solid fa-image"></i>
                <i class="fa-solid fa-list"></i>
                <i class="fa-regular fa-face-smile"></i>
                <i class="fa-solid fa-location-dot"></i>
              </div>
            </div>
            <div className="right">
              <button>Meow!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="posts">
        {posts?.map((p, index) => (
          <>
            <Post data={p} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Posts;

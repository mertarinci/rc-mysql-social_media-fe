import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.scss";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import moment from "moment";
import InputEmoji from "react-input-emoji";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");

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

  const handleSubmit = async (e) => {
    if (text.length > 10) {
      try {
        await axios.post(
          "http://localhost:8080/api/posts/new",
          {
            text: text,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          {
            withCredentials: true,
          }
        );
      } catch (err) {
        console.log(err);
      }
      setText("");
      window.location.reload();
    } else {
      alert("10 harften fazlasini giriniz.");
    }
  };

  // const displayEmojiPicker = () => {
  //   const emoji = document.querySelector(".emoji").style;
  //   if (emoji.visibility === "visible") {
  //     emoji.visibility = "hidden";
  //   } else {
  //     emoji.visibility = "visible";
  //   }
  // };

  return (
    <div className="posts">
      {currentUser && (
        <div id="write" className="write">
          <div className="container">
            <div className="top">
              <div className="left">
                <img
                  src={
                    currentUser.profile_img
                      ? `/images/${currentUser.profile_img}`
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  }
                  alt=""
                />
              </div>
              <div className="middle">
                <p>{currentUser.name}</p>

                <textarea
                  type="text"
                  placeholder="Write here and share your meow to world!"
                  maxLength={250}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <div className="links">
                  <i className="fa-solid fa-image"></i>
                  <i className="fa-solid fa-list"></i>
                  <i className="fa-regular fa-face-smile"></i>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
              </div>
              <div className="right">
                <span>{text.length}/300</span>
                <button onClick={handleSubmit}>Meow!</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="posts">
        {posts?.map((p, index) => (
          <Post data={p} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

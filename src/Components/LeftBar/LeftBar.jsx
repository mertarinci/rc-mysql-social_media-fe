import React from "react";
import { Link } from "react-router-dom";
import "./LeftBar.scss";

const LeftBar = ({}) => {
  const pageActive = "home";
  const active = "active";

  return (
    <div className="leftBar">
      <div className="logo">
        <i class="fa-solid fa-cat"></i>
        <span>kittyfeed</span>
      </div>
      <div className="top">
        <div className={`item item-home ${pageActive === "home" && active}`}>
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </div>
        <div className={`item ${pageActive === "explore" && active}`}>
          <i class="fa-solid fa-hashtag"></i>
          <span>Explore</span>
        </div>
        <div className={`item ${pageActive === "notifications" && active} `}>
          <i class="fa-regular fa-bell"></i>
          <span>Notifications</span>
        </div>
        <div
          className={`item item-message ${pageActive === "messages" && active}`}
        >
          <i class="fa-regular fa-envelope"></i>
          <span>Messages</span>
        </div>
        <div className={`item ${pageActive === "profile" && active}`}>
          <i class="fa-regular fa-user"></i>
          <span>Profile</span>
        </div>
        <div className={`item ${pageActive === "more" && active}`}>
          <i class="fa-solid fa-ellipsis"></i>
          <span>More</span>
        </div>
        <a href="#write">
          <button>Meow!</button>
        </a>
      </div>
      <div className="bottom">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt=""
        />
        <div className="info">
          <span className="username">Mert A.</span>
          <span className="tag">@mertarinci</span>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

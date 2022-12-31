import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./LeftBar.scss";

const LeftBar = ({ pageActive }) => {
  const active = "active";
  const { logout, currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="logo">
        <Link className="link" to={"/"}>
          <i className="fa-solid fa-cat"></i>
        </Link>
        <span>kittyfeed</span>
      </div>
      <div className="top">
        <div className={`item item-home ${pageActive === "home" && active}`}>
          <i className="fa-solid fa-house-user"></i>
          <Link className="link" to={"/"}>
            <span>Home</span>
          </Link>
        </div>
        <div className={`item ${pageActive === "explore" && active}`}>
          <i className="fa-solid fa-hashtag"></i>
          <Link className="link" to={"/explore"}>
            <span>Explore</span>
          </Link>
        </div>
        <div className={`item ${pageActive === "notifications" && active} `}>
          <i className="fa-regular fa-bell"></i>
          <Link className="link" to={"/notifications"}>
            <span>Notifications</span>
          </Link>
        </div>
        <div
          className={`item item-message ${pageActive === "messages" && active}`}
        >
          <i className="fa-regular fa-envelope"></i>
          <Link className="link" to={"/messages"}>
            <span>Messages</span>
          </Link>
        </div>
        <div className={`item ${pageActive === "profile" && active}`}>
          <i className="fa-regular fa-user"></i>
          <Link className="link" to={"/profile"}>
            <span>Profile</span>
          </Link>
        </div>
        <div className={`item ${pageActive === "more" && active}`}>
          <i className="fa-solid fa-ellipsis"></i>
          <Link className="link" to={"/more"}>
            <span>More</span>
          </Link>
        </div>
        <a href="#write">
          <button>Meow!</button>
        </a>
      </div>
      {currentUser && (
        <div className="bottom">
          <img
            src={
              currentUser.profile_img
                ? `/images/${currentUser.profile_img}`
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            alt=""
          />
          <div className="info">
            <span className="username">{currentUser.name}</span>
            <span className="tag">@{currentUser.username}</span>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftBar;

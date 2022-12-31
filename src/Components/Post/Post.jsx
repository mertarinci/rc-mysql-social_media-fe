import moment from "moment/moment";
import React from "react";
import "./Post.scss";

const Post = ({ data }) => {
  return (
    <div className="post">
      {/* <div className="withImg"></div> */}
      <div className="withoutImg">
        <div className="top">
          <div className="left">
            <img
              src={
                data.profile_img
                  ? `/images/${data.profile_img}`
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt=""
            />
          </div>
          <div className="middle">
            <div className="info">
              <p style={{ fontWeight: "bold" }}>
                {data.name ? data.name : "Unkown"}
              </p>
              <p style={{ color: "darkgray" }}>@{data.username}</p>
              <p>-</p>
              <p style={{ color: "darkgray" }}>{moment(data.date).fromNow()}</p>
              {console.log(data.date)}
            </div>
            <div className="content">
              <p>{data.text}</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <i className="fa-solid fa-comment"></i>
          <i className="fa-solid fa-retweet"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-share-from-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Post;

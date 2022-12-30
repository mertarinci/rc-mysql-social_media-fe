import React from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.scss";

const SinglePost = () => {
  const { userId, postId } = useParams();

  return (
    <div className="singlePost">
      User: {userId} postId : {postId}
    </div>
  );
};

export default SinglePost;

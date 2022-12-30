import React from "react";
import LeftBar from "../../Components/LeftBar/LeftBar";
import Posts from "../../Components/Posts/Posts";
import RightBar from "../../Components/RightBar/RightBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <LeftBar />
      <Posts />
      <RightBar />
    </div>
  );
};

export default Home;
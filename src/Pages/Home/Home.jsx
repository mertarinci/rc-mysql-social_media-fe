import React from "react";
import LeftBar from "../../Components/LeftBar/LeftBar";
import NUFooter from "../../Components/NonUserFooter/NUFooter";
import Posts from "../../Components/Posts/Posts";
import RightBar from "../../Components/RightBar/RightBar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <LeftBar pageActive={"home"} />
      <Posts />
      <RightBar />
      {true && <NUFooter />}
    </div>
  );
};

export default Home;

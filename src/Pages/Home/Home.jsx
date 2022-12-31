import React, { useContext, useEffect } from "react";
import LeftBar from "../../Components/LeftBar/LeftBar";
import NUFooter from "../../Components/NonUserFooter/NUFooter";
import Posts from "../../Components/Posts/Posts";
import RightBar from "../../Components/RightBar/RightBar";
import { AuthContext } from "../../Context/AuthContext";
import "./Home.scss";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const changeTitle = () => {
      document.title = "kittyfeed / Home";
    };
    changeTitle();
  }, []);

  return (
    <div className="home">
      <LeftBar pageActive={"home"} />
      <Posts />
      <RightBar />
      {!currentUser && <NUFooter />}
    </div>
  );
};

export default Home;

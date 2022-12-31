import React, { useEffect } from "react";
import LeftBar from "../../Components/LeftBar/LeftBar";
import "./Profile.scss";

const Profile = () => {
  useEffect(() => {
    const changeTitle = () => {
      document.title = "kittyfeed / Profile";
    };
    changeTitle();
  }, []);

  return (
    <div className="profile">
      <LeftBar pageActive={"profile"} />
      <div className="profileInfo">Profile</div>
    </div>
  );
};

export default Profile;

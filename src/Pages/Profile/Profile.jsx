import React from "react";
import LeftBar from "../../Components/LeftBar/LeftBar";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <LeftBar pageActive={"profile"} />
      <div className="profileInfo">Profile</div>
    </div>
  );
};

export default Profile;

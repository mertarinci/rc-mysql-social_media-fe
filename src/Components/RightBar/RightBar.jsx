import React from "react";
import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="search">
        <input type="text" placeholder="Search on kittyfeed" />

        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="trends">
        <div className="header">
          <h3>Trending Topics</h3>
          <i class="fa-solid fa-arrow-trend-up"></i>
        </div>
        <div className="topics">
          <div className="item">
            <h4>#Cat4Life</h4>
          </div>

          <div className="item">
            <h4>#WhyMyCatHatesMe</h4>
          </div>
          <div className="item">
            <h4>#OMGLookatMyCat</h4>
          </div>
          <div className="item">
            <h4>#Adorable</h4>
          </div>
          <div className="item">
            <h4>#IsMyCatIdiot</h4>
          </div>
          <div className="item">
            <h4>#YOLOCatLife</h4>
          </div>
          <div className="item">
            <h4>#DontMessWithCat</h4>
          </div>
          <div className="item">
            <h4>#IShouldAvoidCats</h4>
          </div>
          <div className="item">
            <h4>#HelloWorld</h4>
          </div>
        </div>
      </div>
      <div className="help">
        <div className="head">
          <i class="fa-regular fa-circle-question"></i>
          <h3>Do you need help?</h3>
        </div>
        <div className="info">
          <p>You can always reach us.</p>
        </div>
        <div className="links">
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

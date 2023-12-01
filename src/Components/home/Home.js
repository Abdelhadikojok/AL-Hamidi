import React from "react";
import homeImage from "../../assets/IMG_1523.JPG";

export default function Home() {
  return (
    <div className="home-section" id="Home">
      <div className="container">
        <div className="home-text-container">
          <p class="home-text">
            <div style={{ display: "flex", gap: "10px" }}>
              <span>اطلب </span>
              <p> , معجنات الحميدي </p>
            </div>
            <p> و استمتع بجودة الطعم</p>
          </p>
          <div className="home-menu-link">
            <a href="#Menu">Explore menu</a>
          </div>
        </div>
        <div className="home-page-img">
          <img src={homeImage} alt="home-page-img" />
        </div>
      </div>
    </div>
  );
}

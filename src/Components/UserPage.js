import React from "react";
import Preloader from "./Preloader/preloader";
import TopBar from "./TopBar/TopBar";
import Header from "./Header/Header";
import Home from "./home/Home";
import AboutUs from "./About/About-us";
import HomeMenue from "./Menue/Menue";
import Location from "./location/Location";

export default function UserPage() {
  return (
    <div>
      <Preloader />
      <TopBar />
      <Header />
      <Home />
      <AboutUs />
      <HomeMenue />
      <Location />
    </div>
  );
}

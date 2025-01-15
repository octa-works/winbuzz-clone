import React from "react";
import FootballSlideBar from "./FootballSlideBar";
import CricketSideBar from "./CricketSlideBar";

function HomeAppSlide() {
  return (
    <div className="list-group">
      <FootballSlideBar />
      <CricketSideBar/>
    </div>
  );
}

export default HomeAppSlide;

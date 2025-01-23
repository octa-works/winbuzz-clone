import React from "react";
import MainDisplayMenu from "./pages/MainDisplayMenu";
import RightLinkMenu, { RightSecondLinkMenu } from "./pages/RightLinkMenu";
import AppSlideNav from "./AppSlideNav";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import CricketList from "./GameListHero/CricketList";
import FootballList from "./GameListHero/FootballList";
import TennisList from "./GameListHero/TennisList";

function Home() {
  return (
    <div>
      <Navbar />
      {/* grid responsive */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 mob-app-slide">
            <AppSlideNav />
          </div>
          <div class="col-8 mob-home-main">
            {/* <MainDisplayMenu /> */}
            <Routes>
              <Route path="*" element={<MainDisplayMenu />} />
              <Route path="/cricket-list" element={<CricketList title='CRICKET' />} />
              <Route path="/football-list" element={<FootballList title="FOOTBALL" />} />
              <Route path="/tennis-list" element={<TennisList title="TENNIS" />} />
              <Route path="/politics-list" element={<TennisList title="POLITICS" />} />
            </Routes>
          </div>
          <div class="col-2 mob-app-slide">
            <RightLinkMenu />
            <RightSecondLinkMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

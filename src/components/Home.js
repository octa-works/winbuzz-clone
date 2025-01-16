import React from "react";
import MainDisplayMenu from "./pages/MainDisplayMenu";
import RightLinkMenu, { RightSecondLinkMenu } from "./pages/RightLinkMenu";
import AppSlideNav from "./AppSlideNav";

function Home() {
  return (
    <div>
      {/* grid responsive */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <AppSlideNav />
          </div>
          <div class="col-8">
            <MainDisplayMenu />
          </div>
          <div class="col-2">
            <RightLinkMenu />
            <RightSecondLinkMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

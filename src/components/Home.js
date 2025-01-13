import React from "react";
import MainDisplayMenu from "./pages/MainDisplayMenu";
import RightLinkMenu from "./pages/RightLinkMenu";

function Home() {
  return (
    <div>
      {/* grid responsive */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">Nav App Slide Bar</div>
          <div class="col-8">
            <MainDisplayMenu />
          </div>
          <div class="col-2">
            <RightLinkMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

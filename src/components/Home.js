import React from "react";
import MainDisplayMenu from "./pages/MainDisplayMenu";

function Home() {
  return (
    <div>
      {/* grid responsive */}
      <div class="container text-center">
        <div class="row">
          <div class="col-2">Nav App Slide Bar</div>
          <div class="col-8">
            <MainDisplayMenu />
          </div>
          <div class="col-2">Side Link Menu</div>
        </div>
      </div>
    </div>
  );
}

export default Home;

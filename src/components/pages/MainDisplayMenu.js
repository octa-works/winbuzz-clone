import React from "react";
import MainAnimeDisplay from "./MainAnimeDisplay";

function MainDisplayMenu() {
  return (
    <div>
      <div className="grid text-center">
        <div className="g-col-6 g-col-md-4">
          <MainAnimeDisplay />
        </div>
        <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
        <div className="g-col-6 g-col-md-4">.g-col-6 .g-col-md-4</div>
      </div>
    </div>
  );
}

export default MainDisplayMenu;

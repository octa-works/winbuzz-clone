import React from "react";
import MainAnimeDisplay from "./MainAnimeDisplay";
import MainInPlayCricket from "./MainInPlayCricket";
import MainInPlayFootball from "./MainInPlayFootball";
import MainInImage from "./MainInImage";

function MainDisplayMenu() {
  return (
    <div>
      <div className="grid text-center">
        <div className="g-col-6 g-col-md-4">
          <MainAnimeDisplay />
        </div>
        <div className="g-col-6 g-col-md-4">
          <MainInPlayCricket />
        </div>
        <div className="g-col-6 g-col-md-4">
          <MainInPlayFootball />
          <MainInImage/>
        </div>
      </div>
    </div>
  );
}

export default MainDisplayMenu;

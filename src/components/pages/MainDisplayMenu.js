import React from "react";
import MainAnimeDisplay from "./MainAnimeDisplay";
import MainInPlayCricket from "./MainInPlayCricket";
import MainInPlayFootball from "./MainInPlayFootball";
import MainInImage from "./MainInImage";
import { IconsPack } from "../../assests/icons/IconsPack";

function MainDisplayMenu() {
  return (
    <div>
      <div className="grid text-center">
        <div className="g-col-6 g-col-md-4">
          <MainAnimeDisplay />
        </div>
        <div className="g-col-6 g-col-md-4">
          <div className="text-start pt-2 pb-2 mt-2 mb-2 h6">
            <IconsPack.Inplay className="bg-warning rounded" /> INPLAY
          </div>
          <MainInPlayCricket />
        </div>
        <div className="g-col-6 g-col-md-4">
          <MainInPlayFootball />
          <MainInImage />
        </div>
      </div>
    </div>
  );
}

export default MainDisplayMenu;

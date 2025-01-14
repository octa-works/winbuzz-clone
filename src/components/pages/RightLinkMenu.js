import React from "react";
import routlett from "../../assests/images/rightBanner/roulette.webp";
import sicbo from "../../assests/images/rightBanner/sicbo.webp";
import dragontiger from "../../assests/images/rightBanner/dragontiger.webp";
import lucky7 from "../../assests/images/rightBanner/lucky7.webp";
import andar from "../../assests/images/rightBanner/andar-bahar.webp";

function RightLinkMenu() {
  return (
    <div className="border right-link-menu mt-3">
      <div className="p-1">Play Games</div>
      <div className="right-link-img pt-4 pb-4">
        <img src={routlett} alt="banner" className="img-fluid" />
        <img src={sicbo} alt="banner" className="img-fluid" />
        <img src={dragontiger} alt="banner" className="img-fluid" />
        <img src={lucky7} alt="banner" className="img-fluid" />
        <img src={andar} alt="banner" className="img-fluid" />
      </div>
    </div>
  );
}

export function RightSecondLinkMenu() {
  return (
    <div className=" border right-link-menu mt-3 ">
      <div className="p-1">Play Games</div>
      <div class="row mt-1">
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={routlett} alt="banner" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightLinkMenu;

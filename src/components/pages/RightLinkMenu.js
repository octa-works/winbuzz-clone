import React from "react";
import routlett from "../../assests/images/rightBanner/roulette.webp";
import sicbo from "../../assests/images/rightBanner/sicbo.webp";
import dragontiger from "../../assests/images/rightBanner/dragontiger.webp";
import lucky7 from "../../assests/images/rightBanner/lucky7.webp";
import andar from "../../assests/images/rightBanner/andar-bahar.webp";

import casino4 from "../../assests/images/secondRightBanner/casino4.webp";
import casino5 from "../../assests/images/secondRightBanner/casino5.webp";
import casino6 from "../../assests/images/secondRightBanner/casino6.webp";
import casino8 from "../../assests/images/secondRightBanner/casino9.webp";
import casino9 from "../../assests/images/secondRightBanner/casino8.webp";
import casino10 from "../../assests/images/secondRightBanner/casino10.webp";
import casino12 from "../../assests/images/secondRightBanner/casino12.webp";
import dreamcatch from "../../assests/images/secondRightBanner/casino-dreamcatcher.webp";

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
          <img src={casino4} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={casino5} alt="banner" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={casino6} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={casino8} alt="banner" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={casino9} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={casino10} alt="banner" className="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src={dreamcatch} alt="banner" className="img-fluid" />
        </div>
        <div class="col">
          <img src={casino12} alt="banner" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightLinkMenu;

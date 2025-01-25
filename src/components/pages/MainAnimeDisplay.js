import React from "react";
import animate1 from "../../assests/images/banners/aviator-730-280.gif";
import animate2 from "../../assests/images/banners/wingogames-730-280.gif";
import animate3 from "../../assests/images/banners/mac88-730_280.webp";
import animate4 from "../../assests/images/banners/fun-games-730x280.webp";
import banner1 from "../../assests/images/banners/banner-1.webp";
import banner2 from "../../assests/images/banners/banner-2.webp";
import banner3 from "../../assests/images/banners/banner-3.webp";
import banner4 from "../../assests/images/banners/banner-4.webp";

function MainAnimeDisplay() {
  return (
    <div className="mainAnimate-Mob">
      <div class="container d-flex scroll-container">
        <div class="row p-2 g-2">
          <img src={animate1} alt="banner" className="img-thumbnail " />
          <img src={banner1} alt="banner" className="img-thumbnail" />
        </div>
        <div class="row p-2 g-2">
          <img src={animate2} alt="banner" className="img-thumbnail" />
          <img src={banner2} alt="banner" className="img-thumbnail" />
        </div>
        <div class="row p-2 g-2">
          <img src={animate3} alt="banner" className="img-thumbnail" />
          <img src={banner3} alt="banner" className="img-thumbnail" />
        </div>
        <div class="row p-2 g-2">
          <img src={animate4} alt="banner" className="img-thumbnail" />
          <img src={banner4} alt="banner" className="img-thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default MainAnimeDisplay;

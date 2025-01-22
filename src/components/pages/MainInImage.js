import React from "react";
import img1 from "../../assests/images/mainInImages/CasinoJokerBet.jpeg";
import img2 from "../../assests/images/mainInImages/32casinoCards.jpeg";
import img3 from "../../assests/images/mainInImages/blackJackCasinoGame.webp";
import img4 from "../../assests/images/mainInImages/casinoBetNumber.jpeg";
import img5 from "../../assests/images/mainInImages/casinoFruitRace1.jpeg";
import img6 from "../../assests/images/mainInImages/casinoliveDice.jpeg";
import img7 from "../../assests/images/mainInImages/casinoPoker.jpeg";
import { Link } from "react-router-dom";

function MainInImage() {
  return (
    <div>
      <div className="text-center">
        <div className="row">
          <div className="col p-1">
            <img src={img1} alt="casino1" className="img-fluid h-100" />
          </div>
          <div className="col p-1">
            <img src={img2} alt="casino2" className="img-fluid h-100" />
          </div>
          <div className="col p-1">
            <img src={img3} alt="casino2" className="img-fluid h-100" />
          </div>
        </div>
        <div className="row">
          <div className="col p-1">
            <img src={img4} alt="casino3" className="img-fluid h-100" />
          </div>
          <div className="col p-1">
            <img src={img5} alt="casino2" className="img-fluid h-100" />
          </div>
          <div className="col p-1">
            <img src={img6} alt="casino2" className="img-fluid h-100" />
          </div>
        </div>

        <div className="row">
          {/* <div className="col p-1">
            <img src={img4} alt="casino3" className="img-fluid h-100" />
          </div> */}

          <div className="container-hover-image col p-1">
            <img
              src={img7}
              alt="Avatar"
              className="image-hover"
            //   style={{ width: "100%" }}
            />
            <div className="middle-hover-image">
              <div className="text-hover-image">John Doe</div>
            </div>
          </div>

          <div className="container-hover-image col p-1">
            <img
              src={img7}
              alt="Avatar"
              className="image-hover"
            //   style={{ width: "100%" }}
            />
            <div className="middle-hover-image">
              <div className="text-hover-image">John Doe</div>
            </div>
          </div>

          <div className="container-hover-image col p-1">
            <img
              src={img7}
              alt="Avatar"
              className="image-hover"
            //   style={{ width: "100%" }}
            />
            <div className="middle-hover-image">
              <Link to="/winbuzz-clone/signup" className="btn btn-primary">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInImage;

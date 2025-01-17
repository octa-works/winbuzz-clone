import React from "react";
import BlinkDots from "../../assests/icons/BlinkDots";
import "../../assests/stylesheet/Desktop/TableDesign.css";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function MainInPlayCricket() {
  return (
    <div>
      <div className="float-start">INPLAY</div>
      <div>
        <table class="table table-hover">
          <thead>
            <tr className="table-style">
              <th scope="col">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="tb-text">
                    <div className="small">
                      {currentDate}-{currentTime}
                    </div>
                    <div>Twenty20 Big Bash</div>
                  </div>
                  <div className="d-flex">
                    <BlinkDots />
                    <button className="tbl-btn">BM</button>
                  </div>
                </div>
              </th>

              <th scope="col">
                <div className="inplayCrickRight d-flex justify-content-between align-items-center ms-2 mb-3">
                  <button className="ps-3 pe-3">-</button>
                  <button className="ps-3 pe-3">-</button>
                  <button className="ps-3 pe-3">-</button>
                  <button className="ps-3 pe-3">-</button>
                  <button className="ps-3 pe-3">-</button>
                  <button className="ps-3 pe-3">-</button>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default MainInPlayCricket;

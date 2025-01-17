import React from "react";
import BlinkDots from "../../assests/icons/BlinkDots";
import "../../assests/stylesheet/Desktop/TableDesign.css";
import { IconsPack } from "../../assests/icons/IconsPack";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function MainInPlayCricket() {
  return (
    <div>
      <div className="float-start pt-2 pb-2 mt-2 mb-2">
        <IconsPack.Inplay className="bg-warning rounded" /> INPLAY
      </div>
      <div>
        <table class="table table-hover border border-1 rounded-3 table-responsive">
          <thead className="table-success rounded">
            <tr className="table-style">
              <th scope="col">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="tb-text">
                    <IconsPack.Cricket2 className="me-2" />
                    CRICKET
                  </div>
                  <div className="d-flex gap-2">
                    <button className="tbl-btn border border-danger text-black">
                      <IconsPack.Plus />
                      Live
                    </button>
                    <button className="tbl-btn border border-danger text-black">
                      <IconsPack.Plus />
                      Virtual
                    </button>
                  </div>
                </div>
              </th>

              <th scope="col">
                <div className="inplayCrickRight d-flex justify-content-between align-items-center ms-2 mb-3">
                  <div className="ps-3 pe-3">1</div>
                  <div className="ps-3 pe-3">x</div>
                  <div className="ps-3 pe-3">2</div>
                </div>
              </th>
            </tr>
          </thead>
          {/*  */}
          <tbody>
            {/* First cricket list */}
            <tr>
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

            {/* Second Cricket list */}
            <tr>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainInPlayCricket;

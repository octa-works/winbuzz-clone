import React from "react";
import BlinkDots from "../../assests/icons/BlinkDots";
import "../../assests/stylesheet/Desktop/TableDesign.css";
import { IconsPack } from "../../assests/icons/IconsPack";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function FootballList(data) {
  return (
    <div>
      <div className="float-start pt-2 pb-2 mt-2 mb-2 h6">
        <IconsPack.Inplay className="bg-warning rounded" /> EXCHANGE GAMES
      </div>
      <div>
        <table class="table table-hover border border-1 rounded-3 table-responsive">
          <thead className="table-success rounded">
            <tr className="table-style">
              <th scope="col">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="tb-text">
                    <IconsPack.Cricket2 className="me-2" />
                    {data.title}
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
            {/* First  list */}
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
                    <div className="d-flex gap-2 justify-content-center align-items-center pe-2">
                      <IconsPack.TV className="h4" />
                    </div>
                    <button className="tbl-btn">BM</button>
                  </div>
                </div>
              </th>

              <th scope="col">
                <div className="inplayCrickRight d-flex justify-content-between align-items-center ms-2 mb-3">
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                </div>
              </th>
            </tr>

            {/* Second  list */}
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
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                </div>
              </th>
            </tr>

            {/* Third */}
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
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                </div>
              </th>
            </tr>

            {/* Fourth */}

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
                    <div className="d-flex gap-2 justify-content-center align-items-center pe-2">
                      <IconsPack.Console className="h4" />
                    </div>
                    <button className="tbl-btn">BM</button>
                  </div>
                </div>
              </th>

              <th scope="col">
                <div className="inplayCrickRight d-flex justify-content-between align-items-center ms-2 mb-3">
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                </div>
              </th>
            </tr>

            {/* Fifth */}
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
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> 5.9
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> 51
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                </div>
              </th>
            </tr>

            {/* Sixth */}
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
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> 3
                    </span>
                  </button>
                </div>
              </th>
            </tr>

            {/* Seventh */}
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
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      - <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      0 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                  <button className="ps-3 pe-3 small">
                    <span>
                      1.5 <br /> -
                    </span>
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FootballList;

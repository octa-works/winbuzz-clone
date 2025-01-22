import React from "react";
import BlinkDots from "../../assests/icons/BlinkDots";
import "../../assests/stylesheet/Desktop/TableDesign.css";
import { IconsPack } from "../../assests/icons/IconsPack";

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();

function MainInPlayFootball() {
  return (
    <div>
      <div>
        <div className="table-responsive">
          <table class="table table-hover border border-1 rounded-3 table-responsive">
            <thead className="table-success rounded">
              <tr className="table-style">
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <IconsPack.Football className="me-2" />
                      Football
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
              {/* First football list */}
              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex ">
                      <BlinkDots />
                      <div className="d-flex gap-2 justify-content-center align-items-center pe-2">
                        <IconsPack.TV className="h4" />
                      </div>
                      <button className="tbl-btn text-black">BM</button>
                    </div>
                  </div>
                </th>

                <th scope="col">
                  <div className="inplayCrickRight d-flex justify-content-between align-items-center">
                    <button className="ps-2 pe-2 small">
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

              {/* Second Football list */}
              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex">
                      <BlinkDots />
                      <button className="tbl-btn text-black">BM</button>
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

              {/* Third football */}
              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex">
                      <BlinkDots />
                      <button className="tbl-btn text-black">BM</button>
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

              {/* Fourth */}

              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex">
                      <BlinkDots />
                      <button className="tbl-btn text-black">BM</button>
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

              {/* Fifth */}
              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex">
                      <BlinkDots />
                      <button className="tbl-btn text-black">BM</button>
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

              {/* Sixth */}
              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex">
                      <BlinkDots />
                      <button className="tbl-btn text-black">BM</button>
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

              {/* Seventh */}
              <tr>
                <th scope="col">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="tb-text">
                      <div className="small">
                        {currentDate}-{currentTime}
                      </div>
                      <div>Como V Udinese</div>
                    </div>
                    <div className="d-flex">
                      <BlinkDots />
                      <button className="tbl-btn text-black">BM</button>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainInPlayFootball;

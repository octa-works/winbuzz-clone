import React from "react";
import { Link } from "react-router-dom";

function NavbarList() {
  return (
    <div className="nav-scroll-menu bg-transparent">
      <li>
        <Link
          to="/winbuzz-clone/cricket-list"
          className="text-white bg-transparent"
        >
          {NavList.Nav1}
        </Link>
      </li>
      <li>
        <Link
          to="/winbuzz-clone/football-list"
          className="text-white bg-transparent"
        >
          {NavList.Nav2}
        </Link>
      </li>
      <li>
      <Link
          to="/winbuzz-clone/tennis-list"
          className="text-white bg-transparent"
        >
          {NavList.Nav3}
        </Link>
      </li>
      <li>
      <Link
          to="/winbuzz-clone/politics-list"
          className="text-white bg-transparent"
        >
          {NavList.Nav4}
        </Link>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav4}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav5}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav6}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav7}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav8}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav9}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav10}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav11}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav12}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav13}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav14}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav15}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav16}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav17}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav18}
        </a>
      </li>
      <li>
        <a href="#" className="text-white bg-transparent">
          {NavList.Nav19}
        </a>
      </li>
    </div>
  );
}

export const NavList = {
  Nav1: "Cricket",
  Nav2: "Football",
  Nav3: "Tennis",
  Nav4: "Politics",
  Nav5: "Casino",
  Nav6: "INT Casino",
  Nav7: "Sports Book",
  Nav8: "Horse Racing",
  Nav9: "GreyHound Racing",
  Nav10: "Binary",
  Nav11: "Kabaddi",
  Nav12: "Basket Ball",
  Nav13: "BaseBall",
  Nav14: "Table Tennis",
  Nav15: "VolleyBall",
  Nav16: "Ice Hockey",
  Nav17: "Rugby",
  Nav18: "Mixed Martial Arts",
  Nav19: "Darts",
  Nav20: "Futsal",
  Nav21: "",
  Nav22: "",
  Nav23: "",
  Nav24: "",
};

export default NavbarList;

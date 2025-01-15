import React from "react";
import { NavList } from "./NavbarList";
import { IconsPack } from "../assests/icons/IconsPack";
import CricketSlideBar from "./AppSlideComponents/CricketSlideBar";

function AppSlideNav() {
  return (
    <div>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
          aria-current="true"
        >
          <IconsPack.Cricket className="me-2" /> {NavList.Nav1}{" "}
          <IconsPack.Arrow className="float-end" />
        </a>
        <CricketSlideBar />
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Football className="me-2" /> {NavList.Nav2} {NavList.Nav2}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Tennis className="me-2" /> {NavList.Nav3}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Politics className="me-2" />
          {NavList.Nav4}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Casino className="me-2" />
          {NavList.Nav5}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.INTCasino className="me-2" />
          {NavList.Nav6}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.SportsBook className="me-2" />
          {NavList.Nav7}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.HorseRacing className="me-2" />
          {NavList.Nav8}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.GreyHound className="me-2" />
          {NavList.Nav9}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Binary className="me-2" />
          {NavList.Nav10}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Kabaddi className="me-2" />
          {NavList.Nav11}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Basketball className="me-2" />
          {NavList.Nav12}
          <IconsPack.Arrow className="float-end" />
        </a>

        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Baseball className="me-2" />
          {NavList.Nav13}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.TableTennis className="me-2" />
          {NavList.Nav14}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Volleyball className="me-2" />
          {NavList.Nav15}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.IceSkating className="me-2" />
          {NavList.Nav16}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Rugby className="me-2" />
          {NavList.Nav17}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.MartialArts className="me-2" />
          {NavList.Nav18}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Darts className="me-2" />
          {NavList.Nav19}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Futsal className="me-2" />
          {NavList.Nav20}
          <IconsPack.Arrow className="float-end" />
        </a>
      </div>
    </div>
  );
}

export default AppSlideNav;

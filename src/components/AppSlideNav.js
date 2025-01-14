import React from "react";
import { NavList } from "./NavbarList";
import { IconsPack } from "../assests/icons/IconsPack";

function AppSlideNav() {
  return (
    <div>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
          aria-current="true"
        >
          <IconsPack.Cricket /> {NavList.Nav1}{" "}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Football /> {NavList.Nav2} {NavList.Nav2}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Tennis /> {NavList.Nav3}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Politics />
          {NavList.Nav4}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Casino />
          {NavList.Nav5}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.INTCasino />
          {NavList.Nav6}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.SportsBook />
          {NavList.Nav7}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.HorseRacing />
          {NavList.Nav8}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.GreyHound />
          {NavList.Nav9}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Binary />
          {NavList.Nav10}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Kabaddi />
          {NavList.Nav11}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Basketball />
          {NavList.Nav12}
          <IconsPack.Arrow className="float-end" />
        </a>

        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Baseball />
          {NavList.Nav13}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.TableTennis />
          {NavList.Nav14}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Volleyball />
          {NavList.Nav15}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.IceSkating />
          {NavList.Nav16}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Rugby />
          {NavList.Nav17}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.MartialArts />
          {NavList.Nav18}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Darts />
          {NavList.Nav19}
          <IconsPack.Arrow className="float-end" />
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          <IconsPack.Futsal />
          {NavList.Nav20}
          <IconsPack.Arrow className="float-end" />
        </a>
      </div>
    </div>
  );
}

export default AppSlideNav;

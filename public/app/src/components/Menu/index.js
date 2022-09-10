import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  LinksWrapper,
  UserIcon,
  TaskIcon,
  CompletedIcon,
  // CalendarIcon,
  ReturnIcon,
} from "./styled";

export const Menu = ({ activePage = "/home" }) => {
  return (
    <Container>
      {activePage !== "/profile/edit" ? (
        <LinksWrapper>
          <Link to="/profile">
            <UserIcon size={52} activePage={activePage === "/profile"} />
          </Link>

          <Link to="/home">
            <TaskIcon size={52} activePage={activePage === "/home"} />
          </Link>

          <Link to="/overdue">
            <CompletedIcon size={52} activePage={activePage === "/overdue"} />
          </Link>

          {/* <Link to="/calendar">
            <CalendarIcon size={52} activePage={activePage === "/calendar"} />
          </Link> */}
        </LinksWrapper>
      ) : (
        <Link to="/profile">
          <ReturnIcon size={52} />
        </Link>
      )}
    </Container>
  );
};

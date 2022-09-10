import {
  User,
  Clipboard,
  Task,
  Calendar,
  Undo as Return,
} from "@styled-icons/boxicons-regular";

import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1 !important;
`;

export const LinksWrapper = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const UserIcon = styled(User)`
  color: ${(props) =>
    props.activePage ? props.theme.tertiary : props.theme.text};
  filter: ${(props) =>
    props.activePage
      ? `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`
      : ""};
  transform: ${(props) => (props.activePage ? "scale(1.1)" : "")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    filter: ${(props) => `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`};
    transform: scale(1.1);
  }
`;

export const TaskIcon = styled(Clipboard)`
  color: ${(props) =>
    props.activePage ? props.theme.tertiary : props.theme.text};
  filter: ${(props) =>
    props.activePage
      ? `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`
      : ""};
  transform: ${(props) => (props.activePage ? "scale(1.1)" : "")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    filter: ${(props) => `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`};
    transform: scale(1.1);
  }
`;

export const CompletedIcon = styled(Task)`
  color: ${(props) =>
    props.activePage ? props.theme.tertiary : props.theme.text};
  filter: ${(props) =>
    props.activePage
      ? `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`
      : ""};
  transform: ${(props) => (props.activePage ? "scale(1.1)" : "")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    filter: ${(props) => `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`};
    transform: scale(1.1);
  }
`;

export const CalendarIcon = styled(Calendar)`
  color: ${(props) =>
    props.activePage ? props.theme.tertiary : props.theme.text};
  filter: ${(props) =>
    props.activePage
      ? `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`
      : ""};
  transform: ${(props) => (props.activePage ? "scale(1.1)" : "")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    filter: ${(props) => `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`};
    transform: scale(1.1);
  }
`;

export const ReturnIcon = styled(Return)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 20px;
  left: 25px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    filter: ${(props) => `drop-shadow(0px 0px 5px ${props.theme.iconShadow})`};
    transform: scale(1.1);
  }
`;

import styled from "styled-components";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import { Button } from "../../../components/inputs";

import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";

// import { } from "../../components/inputs";

export const PageContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  width: calc(100vw - 100px);
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;

export const ProfileWrapper = styled.div`
  width: 80%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 100%;
  height: 200px;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 25px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.h3`
  font-size: 24pt;
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;

export const UserEmail = styled.h3`
  font-size: 14pt;
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;

export const Logout = styled(Button).attrs((props) => ({
  children: props.title,
}))`
`;

export const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OptionDivider = styled.hr`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.theme.primary}, ${props.theme.secondary}, ${props.theme.primary})`};
  height: 1px;
  border: none;
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const OptionTitle = styled.h3`
  color: ${(props) => props.theme.text};
  font-weight: 300;
`;

export const EditProfileLink = styled(ChevronRight)`
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease-in-out;
  &:hover {
    margin-right: -10px;
  }
`;

export const ThemeToggler = styled(Toggle)`
  &.react-toggle .react-toggle-track {
    background-color: ${(props) => props.theme.secondary};
  }
  &.react-toggle--checked .react-toggle-track {
    background-color: ${(props) => props.theme.tertiary};
  }
  &.react-toggle .react-toggle-thumb {
    border: none;
    width: 20px;
    height: 20px;
    top: 2px;
    left: 3px;
    background-color: ${(props) => props.theme.primary};
  }
  &.react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
  &.react-toggle--checked .react-toggle-thumb {
    left: 27px;
  }
  &.react-toggle:hover .react-toggle-track {
    background-color: rgb(11, 11, 11);
  }
  &.react-toggle--checked:hover .react-toggle-track {
    background-color: rgb(254, 185, 3);
  }
  &.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }
`;

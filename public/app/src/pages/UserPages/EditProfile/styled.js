import styled from 'styled-components';

import {Link} from 'react-router-dom';

import {Button, Input} from '../../../components/inputs';

import {Show, Hide, Pencil} from '@styled-icons/boxicons-regular';

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

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 100%;
  height: 200px;
  align-items: center;
  position: relative;
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 25px;
  position: absolute;
  left: 0;
  top: 30px;

  cursor: pointer;

  &:hover ~ div {
    display: flex;
  }
`;

export const EditPicIcon = styled(Pencil).attrs({size: 54})`
  color: white;
  cursor: pointer;
`;

export const EditPic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 30px;
  display: none;
  z-index: 10;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 70%;
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  background-image: ${(props) =>
    `linear-gradient(to right, ${props.theme.primary}, ${props.theme.secondary}, ${props.theme.primary})`};
  height: 1px;
  border: none;
  margin: 10px 0;
`;

export const SaveButton = styled(Button)`
  align-self: flex-end;
`;

export const DataInput = styled(Input)`
  margin: 25px 100px 25px 0px;
  width: 300px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const EditPswd = styled(Link).attrs({children: 'Mudar senha'})`
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  cursor: pointer;
  margin-left: 10px;
  margin-top: -10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const EditSubjects = styled(EditPswd).attrs({
  children: 'Editar matérias',
})``;

export const ShowIcon = styled(Show)`
  position: absolute;
  left: 285px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.text};
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    opacity: 1;
  }
`;

export const HideIcon = styled(Hide)`
  position: absolute;
  left: 285px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.text};
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    opacity: 1;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
`;

export const ErrorMessage = styled.p.attrs(({message}) => ({
  children: message,
}))`
  height: 16pt;
  font-size: 16px;
  font-weight: 300;
  margin-top: -20px;
`;

import styled from "styled-components";

import { Link } from "react-router-dom";

import { Button, Input } from "../../components/inputs";

import { Show, Hide } from "@styled-icons/boxicons-regular";

export const PageContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.form`
  display: flex;
  width: 400px;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.tertiary};
  font-weight: 300;
  font-size: 24pt;
  margin-bottom: 10px;
`;

export const FormInput = styled(Input)`
  width: 370px;
`;

export const ErrorMessage = styled.h3`
  color: ${(props) => (props.color === "red" ? "#E73636" : props.theme.text)};
  height: 16pt;
  font-size: 16px;
  font-weight: 300;
`;

export const ForgotPassword = styled.h4`
  color: ${(props) => props.theme.text};
  text-align: end;
  width: 100%;
  font-weight: 300;
`;

export const Highlight = styled(Link)`
  color: ${(props) => props.theme.tertiary};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 370px;
`;

export const ShowIcon = styled(Show)`
  position: absolute;
  left: 350px;
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
  left: 350px;
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

export const OptionsWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
  margin-left: 10px;
`;

export const Check = styled.input.attrs({ type: "checkbox", id: "Checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ .checkmark {
    background-color: #fece03;
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`;

export const CustomCheck = styled.span.attrs({
  className: "checkmark",
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    background-color: #ccc;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => props.theme.primary};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckText = styled.label.attrs({
  htmlFor: "Checkbox",
})`
  font-size: 12pt;
  font-weight: 300;
  color: ${(props) => props.theme.text};
`;

export const SubmitButton = styled(Button)`
  align-self: flex-end;
  width: 150px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Characters = styled.h3.attrs(({ num }) => ({
  children: num || 0,
}))`
  position: absolute;
  left: 320px;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.text};
  font-weight: 200;
  opacity: 0.5;
`;

import styled from "styled-components";

import { Input as FormInput, TextArea, Button } from "../inputs";

import Modal from "react-modal";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.75)";

export const FileUploadModal = styled(Modal)`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.primary};
  height: 90vh;
  width: 70%;
  outline: none;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FileUploadTitle = styled.h1`
  font-size: 52pt;
  width: 100%;
  margin-left: 50px;
`;

export const Inputs = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  flex-wrap: wrap;
  align-self: center;
  position: relative;
`;

export const Input = styled(FormInput)`
  font-size: 28pt;
  width: 450px;
  @media (max-width: 1440px) {
    font-size: 20pt;
    width: 350px;
  }
  @media (max-width: 1366px) {
    font-size: 16pt;
    width: 300px;
  }
`;

export const Description = styled(TextArea)`
  font-size: 20pt;
  width: 100%;
  height: 40%;
  resize: none;
  @media (max-width: 1440px) {
    height: 35%;
  }
`;

export const AttachFile = styled.input.attrs({
  type: "file",
  accept: ".gif,.jpg,.jpeg,.png,.doc,.docx,.pdf,.txt,.zip,.rar",
})`
  display: none;
`;

export const AttachFileTitle = styled.label`
  position: relative;
  text-decoration: none;
  font: inherit;
  font-size: 28pt;
  width: 450px;
  @media (max-width: 1440px) {
    font-size: 20pt;
    width: 350px;
  }
  @media (max-width: 1366px) {
    font-size: 16pt;
    width: 300px;
  }
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.primary};
  text-align: center;
  padding: 10px 30px;
  font-weight: 500;
  transition: ease-in-out 0.3s;
  z-index: 10;
  cursor: pointer;
  border-radius: 15px;
  border: none;
  outline: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 20px ${(props) => props.theme.buttonShadow};
  }
`;

export const Base64Wrapper = styled.input`
  /* display:none; */
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const ErrorsMessage = styled.h3.attrs(({ message }) => ({
  children: message,
}))`
  color: ${(props) => props.theme.text};
  font-size: 20px;
  font-weight: 300;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Save = styled(Button).attrs({ children: "Adicionar" })``;
export const Cancel = styled(Button).attrs({ children: "Cancelar" })`
  margin-right: 20px;
`;

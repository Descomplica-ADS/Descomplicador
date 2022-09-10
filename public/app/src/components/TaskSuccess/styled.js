import styled from "styled-components";

import "react-calendar/dist/Calendar.css";

import { Button } from "../inputs";

import Modal from "react-modal";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.75)";

export const TaskSuccessModal = styled(Modal)`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.primary};
  outline: none;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.3);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
`;

export const Close = styled(Button)``;

export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 50px;
`;

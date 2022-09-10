import styled from "styled-components";

import { Calendar as ReactCalendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Input as FormInput, TextArea, Button, Select } from "../inputs";

import Modal from "react-modal";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.75)";

export const AddTaskModal = styled(Modal)`
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

export const AddTaskTitle = styled.h1`
  font-size: 56pt;
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
`;

export const Input = styled(FormInput)`
  font-size: 32pt;
  width: 450px;
  @media (max-width: 1440px) {
    font-size: 24pt;
    width: 350px;
  }
  @media (max-width: 1366px) {
    font-size: 20pt;
    width: 300px;
  }
`;
export const TimeInput = styled(FormInput)`
  font-size: 32pt;
  width: 450px;
  @media (max-width: 1440px) {
    font-size: 24pt;
    width: 350px;
  }
  @media (max-width: 1366px) {
    font-size: 20pt;
    width: 300px;
  }

  &::-webkit-calendar-picker-indicator {
    filter: ${(props) => {
      if (props.theme.mode === "dark") return "invert(100%)";
      return "invert(0%)";
    }};
  }
`;

export const SubjectSelector = styled(Select)`
  font-size: 32pt;
  width: 480px;
  @media (max-width: 1366px) {
    font-size: 20pt;
    width: 330px;
  }
  @media (max-width: 1440px) {
    font-size: 24pt;
    width: 380px;
  }
`;

export const Description = styled(TextArea)`
  font-size: 24pt;
  width: 100%;
  height: 40%;
  resize: none;
  @media (max-width: 1440px) {
    height: 35%;
  }
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
  font-size: 24px;
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

export const Calendar = styled(ReactCalendar)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.5);
  font-family: Poppins;

  .react-calendar__navigation button {
    color: ${(props) => props.theme.text};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #fece03;
    color: black;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none;
  }
  .react-calendar__tile {
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
    color: ${(props) => props.theme.text};
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #fece03;
    color: black;
  }
  .react-calendar__month-view__days__day--weekend {
    color: ${(props) => props.theme.tertiary};
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #fece03;
    color: #000;
  }
`;

export const CalendarModal = styled(Modal)`
  width: fit-content;
`;

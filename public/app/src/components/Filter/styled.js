import styled from "styled-components";

import { X } from "@styled-icons/boxicons-regular";

import { Button } from "../inputs";

export const FilterContainer = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.isOpen ? 0 : "-50vw")};
  width: 50vw;
  height: 100vh;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 20px 0 0 20px;
  box-shadow: ${(props) => (props.isOpen ? "0px 0px 20px 5px rgba(0, 0, 0, .3)" : "none")};
  transition: right 0.5s ease;
  z-index: 10;
`;

export const FilterContent = styled.div`
  margin: 20px 20px 0px 20px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CloseFilter = styled(X).attrs({ size: 54 })`
  color: ${(props) => props.theme.text};
  margin-left: 40px;
  align-self: flex-start;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    transform: scale(1.2);
  }
`;

export const SubjectWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow-y: auto;
  height: 75%;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.primary};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.tertiary};
    border-radius: 10px;
  }
`;

export const SubjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 55px;
  /* width: 100%; */
`;

export const SubjectsContainerTitle = styled.h1`
  color: ${(props) => props.theme.text};
`;

export const Subject = styled.h2`
  color: ${(props) =>
    props.isSelected ? props.theme.tertiary : props.theme.text};
  font-weight: 300;
  margin: 8px 0;
  cursor: pointer;
`;

export const ClickButton = styled(Button).attrs({ children: "Limpar filtros" })`
  align-self: flex-end;
  width: 200px;
`;

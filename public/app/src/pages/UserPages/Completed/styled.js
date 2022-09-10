import styled from "styled-components";

// import {} from "@styled-icons/boxicons-regular";

import { PlusCircle } from "@styled-icons/boxicons-solid";
import { MenuAltRight as Filter } from "@styled-icons/boxicons-regular";

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

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-weight: 600;
  font-size: 42pt;
`;

export const Buttons = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled(PlusCircle)`
  color: ${props=>props.theme.text};
  cursor: pointer;
`;

export const FilterButton = styled(Filter)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.theme.tertiary};
    transform: scale(1.05);
  }
`;

export const TasksContainer = styled.div`
  margin-top: 30px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #252525;
    border-radius: 10px;
  }
`;
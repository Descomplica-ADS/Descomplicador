import styled from "styled-components";

export const Select = styled.select`
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.text};
  font-size: 16pt;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  &:placeholder-shown {
    font-style: italic;
  }
  box-shadow: inset 0px 0px 10px ${props => props.theme.mode === "dark" ? "black" : "#555555"};
`;

import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigatorButton = styled(Link)`
  width: fit-content;
  text-decoration: none;
  font: inherit;
  font-size: 16pt;
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
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px ${(props) => props.theme.buttonShadow};
  }
`;

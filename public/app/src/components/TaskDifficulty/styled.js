import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
  position: relative;
`;

export const DifficultyTitle = styled.p`
  font-size: 28pt;
  @media (max-width: 1440px) {
    font-size: 16pt;
  }
  @media (max-width: 1366px) {
    font-size: 12pt;
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

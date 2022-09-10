import styled from "styled-components";

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

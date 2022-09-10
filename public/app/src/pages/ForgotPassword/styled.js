import styled from "styled-components";

import { Button, Input } from "../../components/inputs";

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

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  align-self: flex-end;
`;

export const FormInput = styled(Input)``;

export const ErrorMessage = styled.h3.attrs(({ message }) => ({
  children: message,
}))`
  color: ${(props) => props.theme.text};
  height: 16pt;
  font-size: 16px;
  font-weight: 300;
`;

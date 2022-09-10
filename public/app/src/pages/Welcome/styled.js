import styled from "styled-components";

import { NavigatorButton } from "../../components/inputs";

export const PageContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.5;
  z-index: 0;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 250px;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 72pt;
  color: ${(props) => props.theme.text};
  font-weight: 200;
  text-align: center;
  margin-bottom: 100px;
`;

export const TitleHighlight = styled.span`
  color: ${(props) => props.theme.tertiary};
`;

export const OptionsContainer = styled.div`
  width: 500px;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(NavigatorButton)`
  width: 500px;
  font-size: 36pt;
  padding: 20px 0;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 130px;
`;

export const DividerText = styled.h3`
  width: 500px;
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 300;
  color: ${(props) => props.theme.text};
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: #fff;
`;

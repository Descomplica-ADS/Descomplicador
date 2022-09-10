import React from "react";

import {
  PageContainer,
  Container,
  Video,
  Title,
  TitleHighlight,
  Button,
  OptionsContainer,
  Divider,
  DividerText,
  HorizontalLine,
} from "./styled";

import BGVideo from "../../assets/video/typing-person.mp4";

export const Welcome = () => {
  return (
    <PageContainer>
      <Video loop autoPlay muted>
        <source src={BGVideo} type="video/mp4" />
      </Video>
      <Container>
        <Title>
          Bem-vindo ao <TitleHighlight>Descomplicador!</TitleHighlight>
        </Title>
        <OptionsContainer>
          <Button to="/login">ENTRE</Button>
          <Divider>
            <HorizontalLine />
            <DividerText>ou</DividerText>
            <HorizontalLine />
          </Divider>
          <Button to="/register">REGISTRE-SE</Button>
        </OptionsContainer>
      </Container>
    </PageContainer>
  );
};

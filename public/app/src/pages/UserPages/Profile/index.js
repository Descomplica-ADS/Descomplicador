import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import useTheme from "../../../useTheme";
import { useState } from "react";
import { dark, light } from "../../../themes";

import { getUser, logout } from "../../../services/auth";

import {
  PageContainer,
  ProfileWrapper,
  Header,
  User,
  ProfilePic,
  UserInfoWrapper,
  Logout,
  Username as UsernameContainer,
  UserEmail as UserEmailContainer,
  OptionsWrapper,
  OptionDivider,
  Option,
  OptionTitle,
  EditProfileLink,
  ThemeToggler,
} from "./styled";

import ProfilePicture from "../../../assets/img/zuko-icon.png";
import { Spinner } from "../../../components/Loaders";

export const Profile = () => {
  const theme = useTheme();

  const [loadingUserInfo, setLoadingUserInfo] = useState(true);

  const [darkTheme, setdarkTheme] = useState(theme.mode === "dark");

  const changeTheme = (event) => {
    setdarkTheme(event.target.checked);
    darkTheme ? theme.setTheme(light) : theme.setTheme(dark);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    const user = getUser();
    if (user?.name && user?.email) {
      setUserName(user.name);
      setUserEmail(user.email);
    }
    setLoadingUserInfo(false);
  }, []);

  const [userName, setUserName] = useState("Usuário Desconhecido");
  const [userEmail, setUserEmail] = useState("E-mail Desconhecido");

  return (
    <PageContainer>
      <ProfileWrapper>
        <Header>
          <User>
            <ProfilePic src={ProfilePicture} />
            <UserInfoWrapper>
              {loadingUserInfo ? (
                <Spinner />
              ) : (
                <>
                  <UsernameContainer>{userName}</UsernameContainer>
                  <UserEmailContainer>{userEmail}</UserEmailContainer>
                </>
              )}
            </UserInfoWrapper>
          </User>
          <Logout
            title="Logout"
            onClick={() => {
              logout();
              window.location.reload();
            }}
          />
        </Header>
        <OptionsWrapper>
          <OptionDivider />
          <Option>
            <OptionTitle>Editar Perfil</OptionTitle>
            <Link to="/profile/edit">
              <EditProfileLink size={54}></EditProfileLink>
            </Link>
          </Option>
          <OptionDivider />
          <Option>
            <OptionTitle>Tema Escuro</OptionTitle>
            <ThemeToggler
              icons={false}
              checked={darkTheme}
              onChange={(event) => changeTheme(event)}
            />
          </Option>
          <OptionDivider />
        </OptionsWrapper>
        {/* Aqui entra o minigame de progresso */}
      </ProfileWrapper>
    </PageContainer>
  );
};

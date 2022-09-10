import React from "react";

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { api } from "../../services/api";

import { login } from "../../services/auth";

import { ButtonSpinner } from "../../components/Loaders";

import {
  PageContainer,
  Container,
  Title,
  SubmitButton,
  FormInput,
  PasswordWrapper,
  ShowIcon,
  HideIcon,
  Characters,
  ErrorMessage,
} from "./styled";

import { useFormik } from "formik";

import * as Yup from "yup";

const containSpecial = (string) => /(?=.*[!@#$%¨&*()])+/.test(string);

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Campo necessário")
    .max(30, "Este campo aceita até 16 caracteres.")
    .test(
      "Não pode conter caracteres especiais.",
      "Não pode conter caracteres especiais.",
      (string) => !containSpecial(string)
    ),
  name: Yup.string()
    .required("Campo necessário")
    .max(150, "Eita nome grande da porra")
    .test(
      "Não pode conter caracteres especiais.",
      "Não pode conter caracteres especiais.",
      (string) => !containSpecial(string)
    ),
  email: Yup.string()
    .email("Digite um e-mail válido.")
    .required("Campo necessário"),
  password: Yup.string()
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .required("Campo necessário")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscula.")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula.")
    .matches(/(?=.*[0-9])/, "Deve contar pelo menos um número.")
    .matches(/(?=.*[!@#$%¨&*()])+/, "Deve conter um símbolo."),
  confirmPassword: Yup.string()
    .required("Campo necessário")
    .oneOf([Yup.ref("password"), null], "Senhas não coincidem."),
});

export const Register = () => {
  const history = useHistory();

  const [passwordShown, setpasswordShown] = useState(false);
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const [pswCharNum, setpswCharNum] = useState(24);

  const [loadingRegister, setLoadingRegister] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit({ username, name, email, password }) {
      setLoadingRegister(true);
      setTimeout(() => {
        api
          .post("/user/signup", { username, name, email, password })
          .then((response) => {
            login(response.data.token);
            history.push("/home");
          })
          .catch((err) => {
            setLoadingRegister(false);
            alert(err.response?.data?.message || 'Erro inesperado. Por favor, contate a equipe de suporte.');
          });
      }, 1000);
    },
  });

  return (
    <PageContainer>
      <Container onSubmit={handleSubmit}>
        <Title>Registro</Title>
        <FormInput
          placeholder="Nome de usuário"
          name="username"
          onChange={handleChange}
          values={values.username}
        />
        <ErrorMessage message={errors.username ? errors.username : null} />
        <FormInput
          placeholder="Nome completo"
          name="name"
          onChange={handleChange}
          values={values.name}
        />
        <ErrorMessage message={errors.name ? errors.name : null} />
        <FormInput
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleChange}
          values={values.email}
        />
        <ErrorMessage message={errors.email ? errors.email : null} />

        <PasswordWrapper>
          <FormInput
            placeholder="Senha"
            type={passwordShown ? "text" : "password"}
            maxLength={24}
            name="password"
            onChange={(event) => {
              setpswCharNum(24 - event.target.value.length);
              handleChange(event);
            }}
            values={values.password}
          />

          <Characters num={pswCharNum} />
          {passwordShown ? (
            <HideIcon size={32} onClick={() => setpasswordShown(false)} />
          ) : (
            <ShowIcon size={32} onClick={() => setpasswordShown(true)} />
          )}
        </PasswordWrapper>
        <ErrorMessage message={errors.password ? errors.password : null} />
        <PasswordWrapper>
          <FormInput
            placeholder="Confirmar senha"
            type={confirmPasswordShown ? "text" : "password"}
            maxLength={24}
            name="confirmPassword"
            onChange={handleChange}
            values={values.confirmPassword}
          />

          {confirmPasswordShown ? (
            <HideIcon
              size={32}
              onClick={() => setconfirmPasswordShown(false)}
            />
          ) : (
            <ShowIcon size={32} onClick={() => setconfirmPasswordShown(true)} />
          )}
        </PasswordWrapper>
        <ErrorMessage
          message={errors.confirmPassword ? errors.confirmPassword : null}
        />
        <SubmitButton type="submit">
          {loadingRegister ? <ButtonSpinner /> : "Registre-se"}
        </SubmitButton>
      </Container>
    </PageContainer>
  );
};

import React from "react";

import { useState } from "react";

import { useHistory } from "react-router-dom";

import { useFormik } from "formik";

import { api } from "../../services/api";

import { login } from "../../services/auth";

import { ButtonSpinner } from "../../components/Loaders";

import {
  PageContainer,
  Container,
  Title,
  FormInput,
  ForgotPassword,
  Highlight,
  PasswordWrapper,
  ShowIcon,
  HideIcon,
  Characters,
  ErrorMessage,
  OptionsWrapper,
  // CheckWrapper,
  // Check,
  // CustomCheck,
  // CheckText,
  SubmitButton,
} from "./styled";

import * as yup from "yup";

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Campo necessário")
    .max(16, "Este campo aceita até 16 caracteres."),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .required("Campo necessário")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscula.")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula.")
    .matches(/(?=.*[0-9])/, "Deve contar pelo menos um número.")
    .matches(/(?=.*[!@#$%¨&*()])+/, "Deve conter um símbolo."),
  refresh: yup.bool(),
});

export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [pswCharNum, setpswCharNum] = useState(24);

  const history = useHistory();

  const [loadingLogin, setLoadingLogin] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
      refresh: false,
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values) {
      setLoadingLogin(true);
      setTimeout(() => {
        api
          .post("/user/signin", values)
          .then((res) => {
            login(res.data.token);
            history.push("/home");
          })
          .catch((err) => {
            errors.password = "Senha incorreta.";
            setLoadingLogin(false);
          });
      }, 500);
    },
  });

  return (
    <PageContainer>
      <Container onSubmit={handleSubmit}>
        <Title>Login</Title>
        <FormInput
          placeholder="Usuário"
          name="username"
          onChange={handleChange}
          values={values.username}
        />
        <ErrorMessage message={errors.username ? errors.username : null} />
        <ForgotPassword>
          <Highlight to="/forgotpassword">Esqueceu sua senha?</Highlight>
        </ForgotPassword>
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
            <HideIcon size={32} onClick={() => setPasswordShown(false)} />
          ) : (
            <ShowIcon size={32} onClick={() => setPasswordShown(true)} />
          )}
        </PasswordWrapper>
        <ErrorMessage>{errors.password ? errors.password : null}</ErrorMessage>
        <OptionsWrapper>
          {/* <CheckWrapper>
            <CheckText>
              Mantenha-me conectado
              <Check name="refresh" onChange={handleChange} />
              <CustomCheck />
            </CheckText>
          </CheckWrapper> */}
          <SubmitButton type="submit">
            {loadingLogin ? <ButtonSpinner /> : "Login"}
          </SubmitButton>
        </OptionsWrapper>
      </Container>
    </PageContainer>
  );
};

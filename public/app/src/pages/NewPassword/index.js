import React from "react";

import { useState } from "react";

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
import * as yup from "yup";

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Campo necessário")
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscula.")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula.")
    .matches(/(?=.*[0-9])/, "Deve contar pelo menos um número.")
    .matches(/(?=.*[!@#$%¨&*()])+/, "Deve conter um símbolo."),
  confirmPassword: yup
    .string()
    .required("Campo necessário")
    .oneOf([yup.ref("password"), null], "Senhas não coincidem."),
});

export const NewPassword = () => {
  const [passwordShown, setpasswordShown] = useState(false);
  const [confirmPasswordShown, setconfirmPasswordShown] = useState(false);
  const [pswCharNum, setpswCharNum] = useState(24);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit(values) {
      alert("Senha: " + values.password);
    },
  });

  return (
    <PageContainer>
      <Container onSubmit={handleSubmit}>
        <Title>Redefinir senha</Title>
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

        <SubmitButton type="submit">Salvar</SubmitButton>
      </Container>
    </PageContainer>
  );
};

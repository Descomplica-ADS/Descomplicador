import React from "react";

import { useState } from "react";

import {
  PageContainer,
  ProfileWrapper,
  User,
  ProfilePic,
  Form,
  Divider,
  DataInput,
  PasswordWrapper,
  SaveButton,
  CancelButton,
  ShowIcon,
  HideIcon,
  Buttons,
  Characters,
  ErrorMessage,
} from "./styled";

import ProfilePicture from "../../../assets/img/zuko-icon.png";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .required("Campo necessário")
    .matches(/(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscula.")
    .matches(/(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula.")
    .matches(/(?=.*[0-9])/, "Deve contar pelo menos um número.")
    .matches(/(?=.*[!@#$%¨&*()])+/, "Deve conter um símbolo."),
  confirmNewPassword: yup
    .string()
    .required("Campo necessário")
    .oneOf([yup.ref("newPassword"), null], "Senhas não coincidem."),
});

export const EditPassword = () => {
  const [newEditPasswordShown, setNewEditPasswordShown] = useState(false);
  const [
    confirmNewEditPasswordShown,
    setConfirmNewEditPasswordShown,
  ] = useState(false);
  const [pswCharNum, setpswCharNum] = useState(24);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
    onSubmit(values) {
      // Remover ao fazer a lógica de registro
      alert(
        "Senha: " +
          values.newPassword +
          " Confirme senha: " +
          values.confirmNewPassword
      );
    },
  });

  return (
    <PageContainer>
      <ProfileWrapper>
        <User>
          <ProfilePic src={ProfilePicture} />
        </User>
        <Form onSubmit={handleSubmit}>
          {/* <PasswordWrapper>
            <DataInput
              placeholder="Senha atual"
              type={currentEditPasswordShown ? "text" : "password"}
              onChange={handleChange}
            />
            {currentEditPasswordShown ? (
              <HideIcon
                size={32}
                onClick={() => setCurrentEditPasswordShown(false)}
              />
            ) : (
              <ShowIcon
                size={32}
                onClick={() => setCurrentEditPasswordShown(true)}
              />
            )}
          </PasswordWrapper>
          <Divider /> */}
          <PasswordWrapper>
            <DataInput
              placeholder="Nova senha"
              type={newEditPasswordShown ? "text" : "password"}
              maxLength={24}
              onChange={(event) => {
                setpswCharNum(24 - event.target.value.length);
                handleChange(event);
              }}
              name="newPassword"
              values={values.newPassword}
            />
            <Characters num={pswCharNum} />
            {newEditPasswordShown ? (
              <HideIcon
                size={32}
                onClick={() => setNewEditPasswordShown(false)}
              />
            ) : (
              <ShowIcon
                size={32}
                onClick={() => setNewEditPasswordShown(true)}
              />
            )}
          </PasswordWrapper>
          <ErrorMessage
            message={errors.newPassword ? errors.newPassword : null}
          />
          <Divider />
          <PasswordWrapper>
            <DataInput
              placeholder="Confirmar nova senha"
              type={confirmNewEditPasswordShown ? "text" : "password"}
              maxLength={24}
              onChange={handleChange}
              name="confirmNewPassword"
              values={values.confirmNewPassword}
            />
            {confirmNewEditPasswordShown ? (
              <HideIcon
                size={32}
                onClick={() => setConfirmNewEditPasswordShown(false)}
              />
            ) : (
              <ShowIcon
                size={32}
                onClick={() => setConfirmNewEditPasswordShown(true)}
              />
            )}
          </PasswordWrapper>
          <ErrorMessage
            message={
              errors.confirmNewPassword ? errors.confirmNewPassword : null
            }
          />
          <Buttons>
            <CancelButton to="/profile/edit">Cancelar</CancelButton>
            <SaveButton type="submit">Salvar</SaveButton>
          </Buttons>
        </Form>
      </ProfileWrapper>
    </PageContainer>
  );
};

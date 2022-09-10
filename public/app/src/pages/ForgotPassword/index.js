import React from "react";

import {
  PageContainer,
  Container,
  Title,
  SubmitButton,
  FormInput,
  ErrorMessage,
} from "./styled";

import { useFormik } from "formik";

import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required("Campo necessário"),
});

export const ForgotPassword = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit(values) {
      // Remover ao criar a lógica de recuperação de senha
      alert("Email: " + values.email);
    },
  });

  return (
    <PageContainer>
      <Container onSubmit={handleSubmit}>
        <Title>Digita o e-mail ai chefe</Title>
        <FormInput
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleChange}
          values={values.email}
        />
        <ErrorMessage message={errors.email ? errors.email : null} />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </Container>
    </PageContainer>
  );
};

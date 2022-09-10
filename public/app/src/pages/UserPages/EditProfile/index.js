import React from 'react';

import {
  PageContainer,
  ProfileWrapper,
  User,
  ProfilePic,
  EditPic,
  EditPicIcon,
  Form,
  Divider,
  DataInput,
  PasswordWrapper,
  EditPswd,
  SaveButton,
  ErrorMessage,
  EditSubjects,
} from './styled';

import ProfilePicture from '../../../assets/img/zuko-icon.png';

import {useFormik} from 'formik';
import * as yup from 'yup';
import {getUser} from '../../../services/auth';

const containSpecial = (string) => /(?=.*[!@#$%¨&*()])+/.test(string);

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Campo necessário')
    .max(30, 'Este campo aceita até 16 caracteres.')
    .test(
      'Não pode conter caracteres especiais.',
      'Não pode conter caracteres especiais.',
      (string) => !containSpecial(string),
    ),
  fullName: yup
    .string()
    .required('Campo necessário')
    .max(150, 'Eita nome grande da porra')
    .test(
      'Não pode conter caracteres especiais.',
      'Não pode conter caracteres especiais.',
      (string) => !containSpecial(string),
    ),
  email: yup
    .string()
    .email('Digite um e-mail válido.')
    .required('Campo necessário'),
});

export const EditProfile = () => {
  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues: {
      username: '',
      fullName: '',
      email: '',
    },
    validationSchema,
    onSubmit(values) {
      alert('WORK IN PROGRESS');
    },
  });

  const user = getUser();

  return (
    <PageContainer>
      <ProfileWrapper>
        <User>
          <ProfilePic
            src={ProfilePicture}
            onClick={() => alert('WORK IN PROGRESS')}
          />
          <EditPic onClick={() => alert('WORK IN PROGRESS')}>
            <EditPicIcon onClick={() => alert('WORK IN PROGRESS')} />
          </EditPic>
        </User>

        <br />

        <EditSubjects to="/profile/edit/subjects" />

        <Form onSubmit={handleSubmit}>
          <DataInput
            placeholder="Nome de usuário"
            name="username"
            defaultValue={user?.username}
            onChange={handleChange}
            values={values.username}
          />
          <ErrorMessage message={errors.username ? errors.username : null} />
          <Divider />
          <DataInput
            placeholder="Nome completo"
            name="fullName"
            defaultValue={user?.name}
            onChange={handleChange}
            values={values.fullName}
          />
          <ErrorMessage message={errors.fullName ? errors.fullName : null} />
          <Divider />
          <DataInput
            placeholder="E-mail"
            name="email"
            type="email"
            defaultValue={user?.email}
            onChange={handleChange}
            values={values.email}
          />
          <ErrorMessage message={errors.email ? errors.email : null} />
          <Divider />
          <PasswordWrapper>
            <DataInput
              placeholder="Senha atual"
              type="password"
              value="fake-password"
              disabled
            />
          </PasswordWrapper>
          <EditPswd to="/profile/edit/editpassword" />
          <SaveButton type="submit">Salvar</SaveButton>
        </Form>
      </ProfileWrapper>
    </PageContainer>
  );
};

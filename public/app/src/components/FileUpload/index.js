import React, { useState } from 'react';

// import { useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { api } from '../../services/api';
import TaskDifficulty from '../TaskDifficulty';

import { getUser } from '.././../services/auth';

import {
  FileUploadModal,
  FileUploadTitle,
  Inputs,
  Description,
  AttachFile,
  AttachFileTitle,
  Bottom,
  ErrorsMessage,
  ButtonsWrapper,
  Save,
  Cancel,
} from './styled';

const validationSchema = yup.object({
  fileBuffer: yup.string().required('Por favor, anexe um arquivo!'),
  difficulty: yup
    .number()
    .required('Determine o nível de dificuldade da tarefa.'),
  description: yup.string(),
});

const FileUpload = ({ closeUploading, isUploadingOpen, taskID }) => {
  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        difficulty: undefined,
        fileBuffer: undefined,
        description: '',
      },
      validationSchema,
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit(values) {

        let user = getUser();

        let data = new FormData();

        data.append('id', taskID);
        data.append('userId', user?.id);
        data.append('document', values.fileBuffer);
        data.append('difficulty', values.difficulty);
        data.append('description', values.description);

        let config = {
          header: {
            'Content-Type': 'multipart/form-data',
          },
        };

        api
          .put('/task/attachTask', data, config)
          .then(() => window.location.reload())
          .catch((error) => {
            console.log(error);
          });
      },
    });

  const setTaskDifficulty = (value) => {
    setFieldValue('difficulty', value);
  };

  const [fileToAttach, setFileToAttach] = useState(null);
  // const [base64, setBase64] = useState("");

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = _handleReaderLoaded;
    //   reader.readAsBinaryString(file);
    // }
    setFieldValue('fileBuffer', file);
  };

  // const _handleReaderLoaded = (readerEvt) => {
  //   let binaryString = readerEvt.target.result;
  //   // setBase64(btoa(binaryString));
  //   // setFieldValue("fileBuffer", btoa(binaryString));
  // };

  return (
    <>
      <FileUploadModal
        isOpen={isUploadingOpen}
        contentLabel="Minimal Modal Example"
        onRequestClose={closeUploading}>
        <FileUploadTitle>Anexar arquivo</FileUploadTitle>
        <Inputs autoComplete="off" onSubmit={handleSubmit}>
          <AttachFileTitle htmlFor="anexar">
            {fileToAttach ? fileToAttach.name : 'Anexar'}
          </AttachFileTitle>
          <AttachFile
            id="anexar"
            onChange={(e) => {
              setFileToAttach(e.target.files[0]);
              handleFileChange(e);
            }}
          />
          <TaskDifficulty setTaskDifficulty={setTaskDifficulty} />
          <Description
            values={values.description}
            name="description"
            placeholder="Escreva aqui suas instruções ou dicas"
            onChange={handleChange}
          />
          <Bottom>
            <ErrorsMessage message={Object.values(errors)[0]} />
            <ButtonsWrapper>
              <Cancel
                onClick={() => {
                  closeUploading();
                }}
              />
              <Save type="submit" />
            </ButtonsWrapper>
          </Bottom>
        </Inputs>
      </FileUploadModal>
    </>
  );
};

export default FileUpload;

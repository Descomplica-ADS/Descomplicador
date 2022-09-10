import React from "react";

import Lottie from "react-lottie";

import yellowSuccess from "../../assets/lottie/yellow-success.json";
import orangeSuccess from "../../assets/lottie/orange-success.json";
import { useTheme } from 'styled-components';

import { TaskSuccessModal, Close, Title } from "./styled";

const TaskSuccess = ({ modalOpen, closeSuccess }) => {
  const theme = useTheme();

  var animation = theme.mode === 'dark' ? yellowSuccess : orangeSuccess;

  const animOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <TaskSuccessModal
        isOpen={modalOpen}
        contentLabel="Minimal Modal Example"
        onRequestClose={() => {
          closeSuccess();
        }}
      >
        <Lottie options={animOptions} height={300} width={300} />
        <Title>Tarefa adicionada com sucesso!</Title>
        <Close onClick={closeSuccess}>Fechar</Close>
      </TaskSuccessModal>
    </>
  );
};

export default TaskSuccess;

import React from "react";

// import { useState } from "react";
import { AiFillFire as DiffIcon } from "react-icons/ai";
import { useTheme } from "styled-components";

import {
  FileDownloadModal,
  FileDownloadTitle,
  Inputs,
  Description,
  Bottom,
  ButtonsWrapper,
  Save,
  Cancel,
  Container,
  DifficultyTitle,
} from "./styled";

const TaskDifficulty = ({ difficulty }) => {
  const theme = useTheme();

  return (
    <Container>
      <DifficultyTitle>Dificuldade:</DifficultyTitle>
      <div>
        {[...Array(5)].map((star, index) => {
          const diffValue = index + 1;

          return (
            <label>
              <DiffIcon
                className="star"
                color={
                  diffValue <= difficulty ? theme.tertiary : theme.secondary
                }
                size={52}
              />
            </label>
          );
        })}
      </div>
    </Container>
  );
};

const FileDownload = ({
  closeDownload,
  isDownloadingOpen,
  document,
  documentDescription,
  difficulty,
}) => {
  function toArrayBuffer(buf) {
    const ab = new ArrayBuffer(buf.length);
    const view = new Uint8Array(ab);

    for (var i = 0; i < buf.length; ++i) {
      view[i] = buf[i];
    }

    return ab;
  }

  const openFile = (doc) => {
    const arrayBuffer = toArrayBuffer(doc.buffer);

    const blob = new Blob([arrayBuffer], { type: doc.mimeType });

    const url = window.URL.createObjectURL(blob);

    window.open(url);
  };

  return (
    <>
      <FileDownloadModal
        isOpen={isDownloadingOpen}
        contentLabel="Minimal Modal Example"
        onRequestClose={closeDownload}
      >
        <FileDownloadTitle>Baixar arquivo</FileDownloadTitle>
        <Inputs>
          <TaskDifficulty difficulty={difficulty} />
          <Description>{documentDescription}</Description>
          <Bottom>
            <ButtonsWrapper>
              <Cancel
                onClick={() => {
                  closeDownload();
                }}
              />
              <Save onClick={() => openFile(document)} />
            </ButtonsWrapper>
          </Bottom>
        </Inputs>
      </FileDownloadModal>
    </>
  );
};

export default FileDownload;

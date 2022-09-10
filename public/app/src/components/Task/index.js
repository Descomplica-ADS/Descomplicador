import React, { useState } from "react";

import Collapsible from "react-collapsible";
import FileDownload from "../FileDownload";

// import { api } from "../../services/api";

import FileUpload from "../FileUpload";

import {
  Container,
  TaskHeader,
  TaskTitle,
  TaskTitleIcon,
  TaskInfo,
  BottomInfo,
  FileContainer,
  FileIcon,
  DownloadIcon,
  FileInteraction,
} from "./styled";

const Task = ({ title, subject, description, dueDate, document, documentDescription, difficulty, id }) => {
  // #region date manipulation
  var taskDate = new Date(dueDate);
  const dueDateTime = (taskDate) => {
    var now = new Date();
    var time = (taskDate - now) / (1000 * 3600 * 24);

    if (time <= 0) return "overdue";
    if (time <= 1) return "oneDay";
    if (time > 1 && time < 3) return "approachingDue";
    if (time >= 3) return "smooth";
  };

  var taskDueDate = taskDate.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  var taskDueTime = taskDate.toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });
  // #endregion

  // #region modal manipulation

  const [isDownloadingOpen, setIsDownloadingOpen] = useState(false);
  const [isUploadingOpen, setIsUploadingOpen] = useState(false);

  const openDownload = () => {
    setIsDownloadingOpen(true);
  };

  const closeDownload = () => {
    setIsDownloadingOpen(false);
  };
  const openUpload = () => {
    setIsUploadingOpen(true);
  };

  const closeUpload = () => {
    setIsUploadingOpen(false);
  };

  // #endregion

  return (
    <Container dueDateTime={dueDateTime(taskDate)}>
      <Collapsible
        openedClassName="open"
        easing="ease-in-out"
        transitionTime={300}
        trigger={
          <TaskHeader>
            <TaskTitle title={title} subject={subject} />
            <TaskTitleIcon />
          </TaskHeader>
        }
      >
        <TaskInfo>
          <p>{description}</p>
          <BottomInfo>
            <p>
              Prazo de fechamento: {taskDueDate}, {taskDueTime}
            </p>
            <FileContainer>
              <p>
                {document ? (
                  <FileInteraction onClick={openDownload}>
                    Baixar documento <DownloadIcon />
                  </FileInteraction>
                ) : (
                  <>
                    <FileInteraction onClick={openUpload}>
                      Anexar documento <FileIcon />
                    </FileInteraction>
                  </>
                )}
              </p>
              <p>
                {document ? (
                  <>
                    ✅ <i>Entregue</i>
                  </>
                ) : (
                  <>
                    ❌ <i>Não entregue</i>
                  </>
                )}
              </p>
            </FileContainer>
          </BottomInfo>
        </TaskInfo>
      </Collapsible>
      <FileDownload
        taskID={id}
        isDownloadingOpen={isDownloadingOpen}
        closeDownload={closeDownload}
        document={document}
        documentDescription={documentDescription}
        difficulty={difficulty}
      />
      <FileUpload
        taskID={id}
        isUploadingOpen={isUploadingOpen}
        closeUploading={closeUpload}
      />
    </Container>
  );
};

export default Task;

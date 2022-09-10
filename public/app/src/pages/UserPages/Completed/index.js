import React, { useState, useEffect } from "react";

import { api } from "../../../services/api";

import {
  PageContainer,
  Container,
  Header,
  Title,
  Buttons,
  FilterButton,
  TasksContainer,
} from "./styled";

import Filter from "../../../components/Filter";
import { Spinner } from "../../../components/Loaders";
import Task from "../../../components/Task";

export const Completed = () => {
  const [tasks, setTasks] = useState([]);
  const [defaultTasks, setDefaultTasks] = useState([]);

  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    api
      .get("/task/getTasks", {
        range: 0,
      })
      .then((res) => {
        setLoadingData(false);
        setTasks(
          res.data.tasks.filter((task) => new Date(task.dueDate) < new Date())
        );
        setDefaultTasks(
          res.data.tasks.filter((task) => new Date(task.dueDate) < new Date())
        );
      })
      .catch((err) => setLoadingData(false));
    // eslint-disable-next-line
  }, []);

  const [filterOpen, setFilterOpen] = useState(false);

  const openFilter = () => {
    setFilterOpen(true);
  };
  const closeFilter = () => {
    setFilterOpen(false);
  };

  const filterTasks = (subjects) => {
    setTasks(
      subjects.length === 0
        ? [...defaultTasks]
        : defaultTasks.filter(
            (task) =>
              subjects.filter((subject) => task.subject === subject).length > 0
          )
    );
  };

  return (
    <PageContainer>
      <Filter
        isOpen={filterOpen}
        closeFilter={closeFilter}
        filterTasks={filterTasks}
      />
      <Container>
        <Header>
          <Title>Tarefas vencidas</Title>
          <Buttons>
            <FilterButton size={52} onClick={openFilter} />
          </Buttons>
        </Header>
        <TasksContainer>
          {loadingData ? <Spinner /> : null}
          {
            // eslint-disable-next-line array-callback-return
            tasks.map((task) => {
              if (new Date(task.dueDate) < new Date())
                return (
                  <Task
                    key={task._id}
                    id={task._id}
                    title={task.title}
                    subject={task.subject}
                    description={task.description}
                    dueDate={task.dueDate}
                    dueTime={task.dueTime}
                    document={task.document}
                    documentDescription={task.documentDescription}
                    difficulty={task.difficulty}
                  />
                );
            })
          }
        </TasksContainer>
      </Container>
    </PageContainer>
  );
};

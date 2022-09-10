import React from 'react';

import {useState, useEffect} from 'react';

import {api} from '../../../services/api';

import {getUser} from '../../../services/auth';

import {
  PageContainer,
  Container,
  Header,
  Title,
  Buttons,
  AddButton,
  FilterButton,
  TasksContainer,
  ErrorContainer,
  ErrorImage,
  ErrorText,
} from './styled';

import Filter from '../../../components/Filter';
import {Spinner} from '../../../components/Loaders';
import Task from '../../../components/Task';
import AddTask from '../../../components/AddTaskModal';
import TaskSuccess from '../../../components/TaskSuccess';

import {useTheme} from 'styled-components';

import NotFoundYellow from '../../../assets/img/no_data_yellow.svg';
import NotFoundOrange from '../../../assets/img/no_data_orange.svg';

export const Home = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [openTaskSuccess, setOpenTaskSuccess] = useState(false);

  const openSuccess = () => {
    setOpenTaskSuccess(true);
  };
  const closeSuccess = () => {
    setOpenTaskSuccess(false);
    window.location.reload();
  };

  const openModal = () => {
    setmodalOpen(true);
  };
  const closeModal = () => {
    setmodalOpen(false);
  };

  const [tasks, setTasks] = useState([]);
  const [defaultTasks, setDefaultTasks] = useState([]);

  const [loadingData, setLoadingData] = useState(false);

  const addTask = ({title, subject, dueDate, dueTime, description}) => {
    var taskDate = new Date(dueDate.slice(0, -13) + dueTime);

    let user = getUser();

    api
      .put('/task/addTask', {
        title,
        subject,
        dueDate: taskDate,
        description,
        difficulty: 0,
        estimatedTime: 4,
        userId: user?.id,
        createdAt: new Date(),
      })
      .then((res) => {
        closeModal();
        openSuccess();
      })
      .catch((err) =>
        alert(
          err.response?.data?.message ||
            'Erro inesperado. Por favor, contate a equipe de suporte.',
        ),
      );
  };

  useEffect(() => {
    setLoadingData(true);
    api
      .get('/task/getTasks', {
        range: 0,
      })
      .then((res) => {
        setLoadingData(false);
        setTasks(
          res.data.tasks.filter((task) => new Date(task.dueDate) > new Date()),
        );
        setDefaultTasks(
          res.data.tasks.filter((task) => new Date(task.dueDate) > new Date()),
        );
      })
      .catch((err) => {
        setLoadingData(false);
      });
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
              subjects.filter((subject) => task.subject === subject).length > 0,
          ),
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
          <Title>Tarefas ativas</Title>
          <Buttons>
            <AddButton size={52} onClick={openModal} />
            <FilterButton size={52} onClick={openFilter} />
          </Buttons>
        </Header>
        <TasksContainer>
          {loadingData ? <Spinner /> : null}
          {tasks.length > 0 ? (
            // eslint-disable-next-line array-callback-return
            tasks.map((task) => {
              if (new Date(task.dueDate) > new Date()) {
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
              }
            })
          ) : !loadingData ? (
            <TasksNotFound />
          ) : null}
        </TasksContainer>
      </Container>
      <AddTask
        modalOpen={modalOpen}
        closeModal={closeModal}
        addTask={addTask}
      />
      <TaskSuccess modalOpen={openTaskSuccess} closeSuccess={closeSuccess} />
    </PageContainer>
  );
};

const TasksNotFound = () => {
  const theme = useTheme();
  return (
    <ErrorContainer>
      <ErrorImage
        src={theme.mode === 'dark' ? NotFoundYellow : NotFoundOrange}
        alt=""
      />
      <ErrorText>Nenhuma tarefa encontrada.</ErrorText>
    </ErrorContainer>
  );
};

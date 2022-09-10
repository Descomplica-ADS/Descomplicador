import React from 'react';

import {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

import storage from 'local-storage-fallback';

import {
  AddTaskModal,
  AddTaskTitle,
  Inputs,
  Input,
  SubjectSelector,
  Description,
  Bottom,
  ErrorsMessage,
  ButtonsWrapper,
  Save,
  Cancel,
  CalendarModal,
  Calendar,
  TimeInput,
} from './styled';

const validationSchema = yup.object({
  subject: yup.string().required('A matéria não pode estar em branco.'),
  title: yup.string().required('O título da tarefa não pode estar vazio.'),
  dueDate: yup.date().required('A data de entrega não pode estar vazia.'),
  dueTime: yup.string().required('O horário de entrega não pode estar vazio.'),
  description: yup
    .string()
    .required('A descrição da tarefa não pode estar vazia.'),
});

const AddTask = ({modalOpen, closeModal, addTask, openSuccess}) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dueDate, setDueDate] = useState(null);

  const openCalendar = () => {
    setCalendarOpen(true);
  };
  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  // TODO: mover a lógica de storage para uma camada específica pra isso
  const subjectsString = storage.getItem('@DescomplicadorSubjects');

  const subjects = subjectsString ? JSON.parse(subjectsString) : [];

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      subject: '',
      title: '',
      dueDate: '',
      dueTime: '',
      description: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values) {
      addTask(values);
      setDueDate(null);
      resetForm();
    },
  });

  return (
    <>
      <AddTaskModal
        isOpen={modalOpen}
        contentLabel="Minimal Modal Example"
        onRequestClose={() => {
          closeModal();
          resetForm();
          setDueDate(null);
        }}>
        <AddTaskTitle>Adicionar tarefa</AddTaskTitle>
        <Inputs autoComplete="off" onSubmit={handleSubmit}>
          <SubjectSelector
            name="subject"
            values={values.subject}
            onChange={handleChange}>
            <option value={null}>Selecione a matéria</option>
            {subjects.map((subject) => {
              return <option key={subject}>{subject}</option>;
            })}
          </SubjectSelector>
          <Input
            name="title"
            autoFocus
            values={values.title}
            placeholder="Título"
            onChange={handleChange}
          />
          <>
            <Input
              name="dueDate"
              style={{cursor: 'pointer'}}
              placeholder="Prazo"
              onClick={() => openCalendar()}
              readOnly
              value={
                dueDate !== null
                  ? dueDate.toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : ''
              }
            />
            <CalendarModal
              isOpen={calendarOpen}
              contentLabel="Calendário"
              onRequestClose={() => closeCalendar()}>
              <Calendar
                calendarType="US"
                defaultView="month"
                onChange={(date) => {
                  setDueDate(date);
                  setTimeout(() => {
                    closeCalendar();
                  }, 100);
                  setFieldValue('dueDate', date.toISOString());
                }}
              />
            </CalendarModal>
            <TimeInput
              name="dueTime"
              values={values.dueTime}
              type="time"
              onChange={handleChange}
            />
          </>
          <Description
            values={values.description}
            name="description"
            placeholder="Descrição"
            onChange={handleChange}
          />
          <Bottom>
            <ErrorsMessage message={Object.values(errors)[0]} />
            <ButtonsWrapper>
              <Cancel
                onClick={() => {
                  closeModal();
                  resetForm();
                  setDueDate(null);
                }}
              />
              <Save type="submit" />
            </ButtonsWrapper>
          </Bottom>
        </Inputs>
      </AddTaskModal>
    </>
  );
};

export default AddTask;

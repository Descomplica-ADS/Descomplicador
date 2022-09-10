import React, {useState} from 'react';

import {
  PageContainer,
  ProfileWrapper,
  User,
  ProfilePic,
  SubjectsWrapper,
  SaveButton,
  CancelButton,
  Buttons,
  Subject,
  SubjectsList,
  IconsContainer,
  EditIcon,
  DeleteIcon,
  AddIcon,
} from './styled';

import ProfilePicture from '../../../assets/img/zuko-icon.png';

import storage from 'local-storage-fallback';
import {useHistory} from 'react-router-dom';

export const EditSubjects = () => {
  const history = useHistory();

  // TODO: mover a lógica de storage para uma camada específica pra isso
  const subjectsString = storage.getItem('@DescomplicadorSubjects');

  const defaultSubjects = subjectsString ? JSON.parse(subjectsString) : [];

  const [subjects, setSubjects] = useState(defaultSubjects);

  function askSubjectName(defaultValue = '') {
    let subject = window.prompt('Qual o nome da matéria?', defaultValue);

    while (subject.length === 0) {
      subject = window.prompt(
        'O nome da matéria não pode ser vazio. Qual o nome da matéria?',
        defaultValue,
      );
    }

    return subject;
  }

  function handleSubjectAdd() {
    const subject = askSubjectName();

    setSubjects([...subjects, subject]);
  }

  function handleSubjectEdit(subjectIndex) {
    const subject = askSubjectName(subjects[subjectIndex]);

    const newSubjects = [...subjects];

    newSubjects[subjectIndex] = subject;

    setSubjects(newSubjects);
  }

  function handleSubjectDelete(subjectIndex) {
    const canDelete = window.confirm(
      'Tem certeza que deseja deletar essa matéria?',
    );

    if (canDelete) {
      const newSubjects = [...subjects];

      newSubjects.splice(subjectIndex, 1);

      setSubjects(newSubjects);
    }
  }

  function handleSubjectSave() {
    // TODO: mover a lógica de storage para uma camada específica pra isso
    storage.setItem('@DescomplicadorSubjects', JSON.stringify(subjects));
    history.push('/profile/edit');
  }

  return (
    <PageContainer>
      <ProfileWrapper>
        <User>
          <ProfilePic src={ProfilePicture} />
        </User>
        <SubjectsWrapper>
          <AddIcon onClick={handleSubjectAdd} />
          <SubjectsList>
            {subjects.map((subject, i) => (
              <>
                <Subject key={`subject-${i}`}>
                  {subject}
                  <IconsContainer>
                    <EditIcon onClick={() => handleSubjectEdit(i)} />
                    <DeleteIcon onClick={() => handleSubjectDelete(i)} />
                  </IconsContainer>
                </Subject>
              </>
            ))}
          </SubjectsList>
        </SubjectsWrapper>

        <br />

        <Buttons>
          <CancelButton to="/profile/edit">Cancelar</CancelButton>
          <SaveButton onClick={handleSubjectSave}>Salvar</SaveButton>
        </Buttons>
      </ProfileWrapper>
    </PageContainer>
  );
};

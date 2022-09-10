import storage from 'local-storage-fallback';
import React, {useState} from 'react';

import {
  FilterContainer,
  FilterContent,
  CloseFilter,
  SubjectWrapper,
  SubjectsContainer,
  SubjectsContainerTitle,
  Subject,
  ClickButton as Button,
} from './styled';

const subjectsToFilter = [];

function Filter({isOpen, closeFilter, filterTasks}) {
  // TODO: mover a lógica de storage para uma camada específica pra isso
  const subjectsString = storage.getItem('@DescomplicadorSubjects');

  const subjects = subjectsString ? JSON.parse(subjectsString) : [];

  const [normalSubjectSelected, setSubjectSelected] = useState(
    subjects.map(() => false),
  );

  const removeSubject = (subject) => {
    const state = subjectsToFilter;
    state.splice(state.indexOf(subject), 1);
  };

  const handleSubjectsSelectChange = (index) => {
    const state = [...normalSubjectSelected];
    state[index] = !state[index];
    if (state[index]) subjectsToFilter.push(subjects[index]);
    if (!state[index]) removeSubject(subjects[index]);
    setSubjectSelected(state);
    filterTasks(subjectsToFilter);
  };

  return (
    <FilterContainer isOpen={isOpen}>
      <FilterContent>
        <CloseFilter onClick={closeFilter} />
        <SubjectWrapper>
          <SubjectsContainer>
            <SubjectsContainerTitle>Ensino médio</SubjectsContainerTitle>
            {subjects.map((subject, i) => {
              return (
                <Subject
                  key={`${subject}-${normalSubjectSelected[i]}`}
                  isSelected={normalSubjectSelected[i]}
                  onClick={() => {
                    handleSubjectsSelectChange(i);
                  }}>
                  {subject}
                </Subject>
              );
            })}
          </SubjectsContainer>
        </SubjectWrapper>
        <Button
          onClick={() => {
            subjectsToFilter.splice(0, subjectsToFilter.length);
            setSubjectSelected(normalSubjectSelected.map(() => false));
            filterTasks(subjectsToFilter);
          }}
        />
      </FilterContent>
    </FilterContainer>
  );
}

export default Filter;

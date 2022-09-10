import styled from 'styled-components';
import {FiPlus, FiEdit, FiTrash} from 'react-icons/fi';

import {NavigatorButton, Button} from '../../../components/inputs';

export const PageContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  width: calc(100vw - 100px);
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;

export const ProfileWrapper = styled.div`
  width: 80%;
  height: 100%;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 100%;
  height: 200px;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 25px;
`;
export const EditPic = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 25px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const SaveButton = styled(Button)`
  align-self: flex-end;
`;
export const CancelButton = styled(NavigatorButton)`
  align-self: flex-end;
`;

export const SubjectsWrapper = styled.div`
  position: relative;
`;

export const SubjectsList = styled.ul`
  list-style: none;
  max-height: 500px;
  overflow-y: auto;
`;

export const Subject = styled.li`
  width: 25%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const EditIcon = styled(FiEdit)`
  cursor: pointer;

  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const DeleteIcon = styled(FiTrash)`
  cursor: pointer;

  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const AddIcon = styled(FiPlus)`
  cursor: pointer;

  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
`;

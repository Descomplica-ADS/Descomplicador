import styled from 'styled-components';

import { ChevronDown, File } from "@styled-icons/boxicons-regular";
import { Download } from "@styled-icons/boxicons-solid";

export const Container = styled.div`
  width: 90%;
  margin: 20px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondary};
  padding: 20px;
  border-radius: 20px;
  border-left: solid 20px
    ${(props) => {
      if (props.dueDateTime === 'overdue')
        return `${(props) => props.theme.secondary}`;
      if (props.dueDateTime === 'oneDay') return '#FF7272';
      if (props.dueDateTime === 'approachingDue') return '#FFB672';
      if (props.dueDateTime === 'smooth') return '#9FFF72';
      return 'white';
    }};
`;

export const TaskHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;

export const TaskTitle = styled.h1.attrs(({ title, subject }) => ({
  children: title + ' - ' + subject,
}))`
  font-size: 32pt;
  font-weight: 600;
`;

export const TaskTitleIcon = styled(ChevronDown).attrs({ size: 72 })`
  color: ${(props) => props.theme.text};
`;

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
`;

export const BottomInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16pt;
`;

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const FileIcon = styled(File).attrs({ size: 32 })`
  color: ${(props) => props.theme.tertiary};
  margin-left: 5px;
`;

export const DownloadIcon = styled(Download).attrs({ size: 32 })`
  color: ${(props) => props.theme.tertiary};
  margin-left: 5px;
`;

export const AttachFile = styled.input.attrs({
  type: "file",
  accept: ".gif,.jpg,.jpeg,.png,.doc,.docx,.pdf",
})``;

export const FileInteraction = styled.button`
  color: ${(props) => props.theme.tertiary};
  background-color: transparent;
  border: none;
  font-size: 18pt;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    outline: none;
  }
`;

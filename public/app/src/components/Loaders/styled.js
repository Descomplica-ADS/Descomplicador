import styled from 'styled-components';

export const SpinWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid ${props=> props.theme.secondary};
  border-radius: 50%;
  border-top-color: ${props => props.theme.tertiary};

  animation: 1s spin infinite ease;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const BtnSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${props => props.theme.secondary};
  border-radius: 50%;
  border-bottom-color: transparent;

  animation: 1s spin infinite ease;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
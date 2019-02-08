import styled from 'utils/styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  height: 2.5rem;
  * {
    height: 100%;
  }

  input {
    border: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    font-size: 1.25rem;
    padding-left: 0.5rem;

    min-width: 300px;
  }

  button {
    border: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    color: ${props => props.theme.accent};
    background-color: ${props => props.theme.main};

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

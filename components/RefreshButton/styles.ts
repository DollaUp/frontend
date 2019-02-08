import styled from 'utils/styled-components';

const Button = styled.button`
  /* border: 1px solid ${props => props.theme.main}; */
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.main};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: ${props => props.theme['sizes.medium']};
  width: ${props => props.theme['sizes.medium']};
  padding: 1rem;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: none;
  }
`;

export default Button;

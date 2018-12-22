import styled from 'utils/styled-components';

const Header = styled.h1`
  font-weight: 100;
  font-size: 100px;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.primaryColorInverted};
`;

export default Header;

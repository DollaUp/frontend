import Link from 'next/link';

import styled from 'utils/styled-components';

export default styled.div`
  button,
  a {
    letter-spacing: -0.025rem;
    color: ${props => props.theme.main};
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: ${props => props.theme.success};
    }
  }
`;

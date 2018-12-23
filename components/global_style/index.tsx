import { createGlobalStyle } from 'utils/styled-components';

import fontFaceStyles from './fontFaceStyles';
import headerStyles from './headerStyles';
import flexStyles from './flexStyles';
import boxSizingStyles from './boxSizingStyles';

const GlobalStyle = createGlobalStyle`
  ${fontFaceStyles}

  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: 'system-ui';
    margin: 0;
    padding: 0;

    ${headerStyles}

    ${flexStyles}
    
    ${boxSizingStyles}
  }
`;

export default GlobalStyle;

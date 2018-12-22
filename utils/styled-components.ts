import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

interface ThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const defaultTheme = {
  primaryColor: 'green',
  primaryColorInverted: 'red'
};

export { css, createGlobalStyle, keyframes, ThemeProvider, defaultTheme };
export default styled;

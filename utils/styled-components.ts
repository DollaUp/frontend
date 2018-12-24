import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import flatten from 'flat';

interface ThemeInterface {
  main: string;
  accent: string;
  backgroundColor: string;
  success: string;
  'pro.regular': string;
  'pro.dark': string;
  'pro.light': string;

  'sizes.small': string;
  'sizes.medium': string;
  'sizes.large': string;

  [name: string]: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const MAIN_PRO_COLOR = '#2ECE42';
const MAIN_DARK_PRO_COLOR = '#107C91';
const MAIN_LIGHT_PRO_COLOR = '#2ECE42';
const MAIN_BLACK = '#333';
const MAIN_WHITE = '#F8F8F8';

const mainTheme = flatten({
  main: MAIN_BLACK,
  accent: MAIN_WHITE,
  backgroundColor: MAIN_WHITE,
  success: MAIN_PRO_COLOR,
  pro: {
    regular: MAIN_PRO_COLOR,
    dark: MAIN_DARK_PRO_COLOR,
    light: MAIN_LIGHT_PRO_COLOR
  },
  sizes: {
    small: '2rem',
    medium: '3rem',
    large: '4rem'
  }
});

const nightTheme = flatten({
  ...mainTheme,
  main: MAIN_WHITE,
  accent: MAIN_BLACK,
  backgroundColor: MAIN_BLACK
});

const useTheme: Function = (themeName: string = 'main') => {
  switch (themeName) {
    case 'main':
      return mainTheme;
    case 'night':
      return nightTheme;
    default:
      return mainTheme;
  }
};

export { css, createGlobalStyle, keyframes, ThemeProvider, useTheme };
export default styled;

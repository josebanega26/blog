import { createGlobalStyle } from 'styled-components';

const theme = {
  spacing: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    xxl: '2rem',
    xxxl: "2.5rem"
  },
  font: {
    heading: 'Newsreader',
    text: 'Roboto'
  },
};

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  lightText: '#FAFAFA',
  description: '#666666',
  toggleBorder: '#FFF', 
  background: '#363537',
  btn: {
    dark: '#000',
    darkHover: '#222',
    danger: '#A6120D',
    dangerHover: '#D9221C',
    text: '#fff'
  },
  ...theme,
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  lightText: '#1A1A1A',
  description: '#666666',
  toggleBorder: '#6B8096',
  background: '#999',
  btn: {
    dark: '#FFF',
    darkHover: '#DDD',
    text: '#222'
  },
  ...theme,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', Helvetica, Arial, Roboto, sans-serif;
    padding: 0;
    margin: 0;
    transition: all 0.50s linear;
  }
  a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

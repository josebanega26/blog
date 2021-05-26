import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  height: 60px;
  border-top-width: 1px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing.xs || "8px"};
  }
`;

export const LeftNav = styled.div`
  display: flex;
  ul {
    display: flex;
    padding-inline-start: 0;
    list-style-type: none;
    li {
      padding: ${({ theme }) => `0 ${theme.spacing.xxl || "4px"}`};
      letter-spacing: 0.05rem;
      &.active > a {
        border-bottom: 2px solid ${({ theme }) => theme.background};
      }
    }
  }
`;

export const Footer = styled.footer`
  background: #222;
  color: ${({ theme }) => theme.lightText};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  color: ${({ theme }) => theme.text};
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 100px;
`;

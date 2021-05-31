import { useState } from "react";
import Logo from "@/components/Logo";
import { Container, Header, Footer, Main, Nav } from "./Layout.style";
import Link from "next/link";
import { links } from "./Layout.data";
import { useRouter } from "next/router";
import DarkModeToggle from "react-dark-mode-toggle";
interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  theme: string;
}

const year = new Date().getFullYear();
const Layout = ({ children, theme, toggleTheme }: LayoutProps) => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

  const onChange = () => {
    toggleTheme()
    setIsDarkMode((prevState)=> !prevState)
  }
  return (
    <Container>
      <Header>
        <nav>
          <Nav>
            <Logo></Logo>
            <ul>
              {links.map(({ path, name }) => {
                return (
                  <li
                    key={path}
                    className={router.pathname === path ? "active" : ""}
                  >
                    <Link href={path}>
                      <a>{name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Nav>
          <Nav>
            <ul>
              <li>
                <Link href="/related/add">
                  <a>Add Post</a>
                </Link>
              </li>
              <li>
                 <DarkModeToggle
                  onChange={onChange}
                  checked={isDarkMode}
                  size={80}
                />
              </li>
            </ul>
          </Nav>
        </nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <small>{`Made By Jose Banega - copyright ${year} ©`}</small>
      </Footer>
    </Container>
  );
};

export default Layout;

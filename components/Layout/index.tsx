import React from "react";
import Logo from "@/components/Logo";
import { Container, Header, Footer, Main, LeftNav } from "./Layout.style";
import Link from "next/link";
import { links } from "./Layout.data";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const year = new Date().getFullYear();
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <nav>
          <LeftNav>
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
          </LeftNav>
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

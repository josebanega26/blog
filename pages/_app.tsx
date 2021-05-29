import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "styles/themeConfig";
import Layout from "@/components/Layout";
import { AppProvider } from "context";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout toggleTheme={toggleTheme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;

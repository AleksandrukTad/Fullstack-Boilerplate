import React from "react";

import { ThemeProvider } from "styled-components";

import HelloWorld from "../components/HelloWorld/HelloWorld";

import theme from "../styles/theme";

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HelloWorld testProps="test" />
    </ThemeProvider>
  );
}

export default Home;

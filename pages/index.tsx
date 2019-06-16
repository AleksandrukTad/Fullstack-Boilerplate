import React from "react";

import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "styled-components";

import HelloWorld from "../components/HelloWorld/HelloWorld";

import store from "../store";
import theme from "../styles/theme";

function Home() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <HelloWorld />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default Home;

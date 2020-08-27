import React from "react";
import { render } from "react-dom";
import "./index.css";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { Home } from "./screens";

import * as serviceWorker from "./serviceWorker";

export function App(): JSX.Element {
  return <Home />;
}

const rootElement = document.getElementById("root");

render(
  <ThemeProvider>
    <CSSReset />
    <App />
  </ThemeProvider>,
  rootElement
);

serviceWorker.unregister();

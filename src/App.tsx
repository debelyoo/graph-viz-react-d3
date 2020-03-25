import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppContainer from "./AppContainer";

const hist = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00acf0",
      contrastText: "#fff",
    },
  },
});

export default () => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={hist}>
        <AppContainer />
      </Router>
    </ThemeProvider>
  </>
);

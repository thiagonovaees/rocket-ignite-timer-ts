//Importa o compenente ThemeProvider como pai de toda a aplicação;
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/darkTheme";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

import { ThemeProvider } from "@emotion/react";
import theme from "./common/styles/theme";
import GlobalStyle from "./common/styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;

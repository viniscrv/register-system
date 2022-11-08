import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#171717",
      paper: "#111112",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

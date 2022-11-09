import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
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
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

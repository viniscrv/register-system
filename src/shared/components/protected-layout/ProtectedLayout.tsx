import { Box, Paper, Button, useMediaQuery, useTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../../context/AuthProvider/useAuth";

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/listagem");
  }

  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  if (!auth.username) {
    return (
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{
          backgroundImage:
            "linear-gradient(to right top, #171717, #1d1f24, #161d23, #132227, #153e44)",
        }}
      >
         <Box>
        <img width="200px" src={logo} style={{ marginBottom: "1em" }} />
      </Box>
        <Box>
        </Box>

        <Box
          component={Paper}
          width={mdDown ? "450px" : "700px"}
          height="400px"
          elevation={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ position: "relative" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="350px"
            component="form"
            onSubmit={handleSubmit}
          >
            <Typography variant="h6" mb={1}>A autenticação falhou.</Typography>
            <Typography variant="h3" mb={3}>Você não está logado :(</Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                background:
                  "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
                color: "white",
              }}
              onClick={() => navigate("/listagem-alternativa")}
            >
              Continuar mesmo assim
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return children;
};

export default ProtectedLayout;

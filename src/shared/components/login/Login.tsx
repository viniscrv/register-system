import { Box, Button, Paper, TextField } from "@mui/material";
import logo from "../../assets/images/logo.png";
import astronauta from "../../assets/images/astronauta.png";
import React from "react";

const Login = () => (
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

    <Box
      component={Paper}
      width="700px"
      height="400px"
      elevation={3}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ position: "relative"}}
    >
      <Box display="flex" flexDirection="column" component="form" width="350px">
        <TextField
          label="E-mail"
          variant="outlined"
          required
          sx={{ mb: "1em" }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          required
          sx={{ mb: "1em" }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            background:
              "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
            color: "white",
          }}
        >
          Login
        </Button>
        <Box sx={{ position: "absolute", top: -200, right: -300 }}>
          <img width="400px" src={astronauta} />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Login;

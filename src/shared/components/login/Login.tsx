import {
  Box,
  Button,
  Paper,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../assets/images/logo.png";
import astronauta from "../../assets/images/astronauta.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    console.log("ok")
    event.preventDefault();
    fetch("http://peopletest.leadsoft.inf.br/api/v1/Auth/LogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json-patch+json"
      },
      body: JSON.stringify({username, password}),
    }).then(resposta => {
      console.log(resposta)
      return resposta.json()
    }).then(json => console.log(json))
  }

  const theme = useTheme();

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

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
          component="form"
          width="350px"
          onSubmit={handleSubmit}
        >
          <TextField
            label="E-mail"
            variant="outlined"
            required
            sx={{ mb: "1em" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            required
            sx={{ mb: "1em" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              background:
                "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
              color: "white",
            }}
            // onClick={() => navigate("/listagem")}
            type="submit"
          >
            Login
          </Button>
          <Box
            display={mdDown ? "none" : "block"}
            sx={{ position: "absolute", top: -200, right: -300 }}
          >
            <img width="400px" src={astronauta} />
          </Box>
        </Box>
      </Box>
      {username}
    </Box>
  );
};

export default Login;

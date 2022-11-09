import {
  Box,
  Paper,
  Grid,
  LinearProgress,
  Typography,
  TextField,
  Button,
  Icon,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{
        backgroundImage:
          "linear-gradient(to right top, #171717, #1d1f24, #161d23, #132227, #153e44)",
      }}
    >
      <Typography p={3} variant="h2" sx={{ color: "white" }}>
        Cadastro
      </Typography>

      <Box
        maxWidth={800}
        margin="auto"
        display="flex"
        flexDirection="column"
        component={Paper}
      >
        <Grid container p={3} spacing={2}>
          <Grid item>
            <Typography variant="h4">Geral</Typography>
          </Grid>

          <Grid container item direction="row" spacing={2}>
            <Grid item sm={12}>
              <TextField fullWidth label="Nome completo" />
            </Grid>
          </Grid>

          <Grid container item direction="row" spacing={2}>
            <Grid item sm={12}>
              <TextField fullWidth label="Idade" />
            </Grid>
          </Grid>

          <Grid container item direction="row" spacing={2}>
            <Grid item sm={12}>
              <TextField fullWidth label="Altura" />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item sm={12}>
              <TextField fullWidth label="Peso" />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item sm={12}>
              <TextField fullWidth label="IMC" />
            </Grid>
          </Grid>
        </Grid>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          
          sx={{
            background:
              "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
            color: "white",
            p: 2,
            m: 3
          }}
          onClick={() => navigate("/listagem-alternativa")}
        >
          <Typography variant="button">Cadastrar</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Cadastro;

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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [peso, setPeso] = useState<string>("");
  const [imc, setImc] = useState<string>("");

  const cadastrar = async (e: any) => {
    e.preventDefault();

    const people = {
      nomeCompleto,
      idade,
      altura,
      peso,
      imc,
    };

    const res = await fetch("http://localhost:3000/people", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(people)
    });

    navigate("/listagem-alternativa");
  };

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
        display="flex"
        justifyContent="end"
        maxWidth={800}
        m="auto"
        p={3}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Icon>arrow_back</Icon>}
          size="large"
          sx={{
            background:
              "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
            color: "white",
          }}
          onClick={() => navigate("/listagem-alternativa")}
        >
          <Typography variant="button">Voltar</Typography>
        </Button>
      </Box>

      <Box
        maxWidth={800}
        margin="auto"
        display="flex"
        flexDirection="column"
        component={Paper}
      >
        <Box component="form" onSubmit={cadastrar}>
          <Grid container p={3} spacing={2}>
            <Grid item>
              <Typography variant="h4">Geral</Typography>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Nome completo"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Altura"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Peso"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="IMC"
                  value={imc}
                  onChange={(e) => setImc(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            color="primary"
            size="large"
            fullWidth
            type="submit"
            sx={{
              background:
                "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
              color: "white",
              p: 2,
            }}
          >
            <Typography variant="button">Cadastrar</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cadastro;

import {
  Box,
  Typography,
  Button,
  Icon,
  Paper,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edicao = () => {
  const parametros = useParams();

  const deleteId = () => {
    if (confirm("Tem certeza que deseja excluir este registro?")) {
      axios.delete(`http://localhost:3000/people/${parametros.id}`);
      navigate("/listagem-alternativa");
    }
  };

  const alterarId = (id: any) => {
    axios.put(`http://localhost:3000/people/${parametros.id}`, id);
    navigate("/listagem-alternativa");
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const people = {
      nomeCompleto,
      idade,
      altura,
      peso,
      imc,
    };
    alterarId(people);
  };

  const [nomeCompleto, setNomeCompleto] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [peso, setPeso] = useState<string>("");
  const [imc, setImc] = useState<string>("");

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
        Editar
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
        <Box component="form" onSubmit={onSubmit}>
          <Grid container p={3} spacing={2}>
            <Grid item>
              <Typography variant="h4">Geral</Typography>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Nome completo"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Altura"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Peso"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
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
              background: "linear-gradient(124deg, #36acd4 0%, #1b7494 100%)",
              color: "white",
              p: 2,
              marginBottom: 2,
            }}
          >
            <Typography variant="button">Editar registro</Typography>
          </Button>
          <Button
            color="primary"
            size="large"
            fullWidth
            type="button"
            onClick={deleteId}
            sx={{
              background: "linear-gradient(124deg, #d43636 0%, #670a0a 100%)",
              color: "white",
              p: 2,
            }}
          >
            <Typography variant="button">Excluir registro</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Edicao;

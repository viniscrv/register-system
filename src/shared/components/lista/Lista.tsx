import {
  Box,
  Button,
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Lista = () => {
  const navigate = useNavigate();

  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch("http://localhost:3000/people");
      const data = await res.json();

      setDados(data);
    }
    fetchdata();
  }, []);

  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{
        backgroundImage:
          "linear-gradient(to right top, #171717, #1d1f24, #161d23, #132227, #153e44)",
      }}
    >
      <Box
        display="flex"
        justifyContent="end"
        maxWidth={1200}
        m="auto"
        p={3}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Icon>add</Icon>}
          size="large"
          sx={{
            background:
              "linear-gradient(124deg, rgba(5,202,255,1) 0%, rgba(20,88,245,1) 100%)",
            color: "white",
          }}
          onClick={() => navigate("/cadastro-alternativo")}
        >
          <Typography variant="button">Novo</Typography>
        </Button>
      </Box>
      <Box maxWidth={1200} m="auto">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome Completo</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Altura</TableCell>
                <TableCell>Peso</TableCell>
                <TableCell>IMC</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dados.map((pessoa: any) => (
                <TableRow key={pessoa.id}>
                  <TableCell>{pessoa.nomeCompleto}</TableCell>
                  <TableCell>{pessoa.idade}</TableCell>
                  <TableCell>{pessoa.altura}</TableCell>
                  <TableCell>{pessoa.peso}</TableCell>
                  <TableCell>{pessoa.imc}</TableCell>
                  <TableCell>
                    <IconButton>
                      <Icon>edit</Icon>
                    </IconButton>
                    <IconButton>
                      <Icon>delete</Icon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Lista;

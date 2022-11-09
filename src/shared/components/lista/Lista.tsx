import {
  Box,
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BarraDeFerramentas from "../barra-de-ferramentas/BarraDeFerramentas";

const Lista = () => {
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
      <BarraDeFerramentas />
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

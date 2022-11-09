import { Box, Paper, Button, Icon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BarraDeFerramentas = () => {

  const navigate = useNavigate();

  return (
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
  );
};

export default BarraDeFerramentas;

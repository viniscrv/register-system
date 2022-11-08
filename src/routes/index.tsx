import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";


export const AppRoutes = () => {

    return (
      <Routes>
        <Route path="/pagina-inicial" element={<h1>test</h1>} />
        <Route path="*" element={<Navigate to="pagina-inicial" />} />
      </Routes>  
    );
  };
  
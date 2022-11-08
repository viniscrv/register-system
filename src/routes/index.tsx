import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import PaginaLogin from "../pages/login/PaginaLogin";


export const AppRoutes = () => {

    return (
      <Routes>
        <Route path="/login" element={<PaginaLogin/>} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>  
    );
  };
  
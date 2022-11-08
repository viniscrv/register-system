import { Routes, Route, Navigate } from "react-router-dom";
import PaginaListagem from "../pages/listagem/PaginaListagem";
import PaginaLogin from "../pages/login/PaginaLogin";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<PaginaLogin />} />
      <Route path="/listagem" element={<PaginaListagem />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

import { Routes, Route, Navigate } from "react-router-dom";
import ListagemAternativa from "../pages/listagem-alternativa/ListagemAternativa";
import PaginaListagem from "../pages/listagem/PaginaListagem";
import PaginaLogin from "../pages/login/PaginaLogin";
import ProtectedLayout from "../shared/components/protected-layout/ProtectedLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="login" />} />
      <Route path="/login" element={<PaginaLogin />} />
      <Route path="/listagem-alternativa" element={<ListagemAternativa/>} />
      <Route
        path="/listagem"
        element={
          <ProtectedLayout>
            <PaginaListagem />
          </ProtectedLayout>
        }
      />
    </Routes>
  );
};

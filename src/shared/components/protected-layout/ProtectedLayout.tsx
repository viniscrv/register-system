import React from "react";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import Login from "../login/Login";

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você nao esta logado</h1>;
  }

  return children;
};

export default ProtectedLayout;

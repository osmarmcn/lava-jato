import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Acesso } from "../pages/publicas/signInUp";
import { Geral } from "../pages/publicas/geral";
import useAuth from "../hooks/useAuth";

const PublicRoutes: React.FC = () => {
  const { signed } = useAuth(); // Verifica se o usuário está logado

  return (
    <Routes>
      <Route path="/geral" element={<Geral />} />
      
      {/* Se usuário já estiver logado, não pode acessar /auth */}
      <Route path="/auth" element={signed ? <Navigate to="/app/dashboard" replace /> : <Acesso />} />

      <Route path="/" element={<Navigate to="/geral" replace />} />
      <Route path="*" element={<Navigate to="/geral" replace />} />
    </Routes>
  );
};

export default PublicRoutes;

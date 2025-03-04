

import { Routes, Route, Navigate } from "react-router-dom";
import { Settings } from "../pages/privadas/settings/settings";
import { Perfil } from "../pages/privadas/perfil/perfil";
import { Dashboard } from "../pages/privadas/dashboard/dashboard";


// Simulando uma autenticação (substituir por um contexto de autenticação real)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const PrivateRoutes = () => {
  return isAuthenticated() ? (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/configuracoes" element={<Settings />} />
    </Routes>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoutes;

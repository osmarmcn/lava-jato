
import { Routes, Route } from "react-router-dom";
import { Acesso } from "../pages/publicas/signInUp";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Acesso />} />
    </Routes>
  );
};

export default PublicRoutes;

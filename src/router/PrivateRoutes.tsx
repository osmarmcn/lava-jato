import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/privadas/dashboard/dashboard';
import { Perfil } from '../pages/privadas/perfil/perfil';
import { Settings } from '../pages/privadas/settings/settings';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/geral" replace />} />
    </Routes>
  );
};

export default PrivateRoutes;

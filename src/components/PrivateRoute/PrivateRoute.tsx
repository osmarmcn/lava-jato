
import { Route, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = () => {
  const { signed } = useAuth(); // Verifica se o usuário está autenticado

  // Se não estiver autenticado, redireciona para a página de login
  if (!signed) {
    return <Navigate to="/geral" replace />;
  }

  return <Outlet />; // Caso esteja autenticado, permite o acesso às rotas internas
};

export default PrivateRoute;

import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth"; // Importando o hook de autenticação

export const Dashboard = () => {
  const navigate = useNavigate();
  const { signout } = useAuth(); // Pegando a função de signout do contexto

  const handleLogout = () => {
    signout(); // Limpa os dados de login no contexto e localStorage
    navigate("/"); // Redireciona para a página pública de login ou cadastro
  };

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Dashboard</h1>
      <p>Você está logado e acessando a página privada.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

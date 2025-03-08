
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
   
    navigate("/geral")
  };

  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Dashboard</h1>
      <p>Você está logado e acessando a página privada.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

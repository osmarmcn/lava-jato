import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Acesso } from "../signInUp";
import useAuth from "../../../hooks/useAuth"; // Para acessar o estado de autenticação
import "./geral.css";

export const Geral = () => {
  const { signed } = useAuth(); // Pegando o estado de autenticação
  const navigate = useNavigate();

  useEffect(() => {
    // Se o usuário já estiver autenticado, redireciona para o dashboard
    if (signed) {
      navigate("/app/dashboard");
    }
  }, [signed, navigate]); // Só roda quando o estado de 'signed' mudar

  return (
    <div className="container-geral">
      <div className="box">
        <div className="box-1">
          <div className="content">
            <h1>Bem-vindo ao [Nome do Lava Jato]!</h1>
            <p>Seu carro merece o melhor cuidado. Aqui, oferecemos um serviço rápido, eficiente e de qualidade para deixar seu veículo brilhando como novo.</p>
            <p>Transforme a aparência do seu carro e sinta a diferença! Agende agora e experimente o melhor lava-jato da cidade.</p>
          </div>
        </div>
        <div className="box-2">
          {/* Mostra o componente de login/cadastro apenas quando o usuário não está autenticado */}
          {!signed && <Acesso />}
        </div>
      </div>
    </div>
  );
};

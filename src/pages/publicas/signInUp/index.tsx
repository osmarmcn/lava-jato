import { useState, useRef } from "react";
import "./acess.css";

// Importando as expressões regulares de validação
import { emailRegex, passwordRegex } from "../../../regex";

export const Acesso = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRotation = (angle: number) => {
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  };

  // Função para validação de email
  const validateEmail = (email: string) => {
    if (!email) {
      return "Email é obrigatório.";
    } else if (!emailRegex.test(email)) {
      return "Email inválido.";
    }
    return "";
  };

  // Função para validação de senha
  const validatePassword = (password: string) => {
    if (!password) {
      return "Senha é obrigatória.";
    } else if (!passwordRegex.test(password)) {
      return "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.";
    }
    return "";
  };

  // Função para lidar com o submit do formulário de login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailError(emailError);
    setPasswordError(passwordError);

    // Se não houver erro, pode submeter
    if (!emailError && !passwordError) {
      // Aqui você pode fazer o login, enviar dados para o backend, etc.
      console.log("Login realizado com sucesso!");
    }
  };

  // Função para lidar com o submit do formulário de cadastro
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailError(emailError);
    setPasswordError(passwordError);

    // Se não houver erro, pode submeter
    if (!emailError && !passwordError) {
      // Aqui você pode fazer o cadastro, enviar dados para o backend, etc.
      console.log("Cadastro realizado com sucesso!");
    }
  };

  return (
    <div className="acesso-container">
      <div className="wrapper">
        <section className="container" ref={containerRef}>
          {/* 🟢 Tela Inicial */}
          <div className="container-a">
            <h2>Bem-vindo!</h2>
            <div className="direction">
              <button className="navButton login" onClick={() => handleRotation(-90)}>
                Login
              </button>
              <button className="navButton signup" onClick={() => handleRotation(-180)}>
                Cadastro
              </button>
            </div>
          </div>

          {/* 🔵 Tela de Login */}
          <div className="container-b">
            <h1>Login</h1>
            <form className="form" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <span className="error">{passwordError}</span>}
              </div>
              <button type="submit">Entrar</button>
            </form>
            <div className="btn">
              <button className="signupLink" onClick={() => handleRotation(-180)}>
                Cadastre-se aqui
              </button>
            </div>
          </div>

          {/* 🟣 Tela de Cadastro */}
          <div className="container-c">
            <h1>Cadastro</h1>
            <form className="form" onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input type="tel" placeholder="Digite seu telefone" required />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  placeholder="Crie uma senha"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <span className="error">{passwordError}</span>}
              </div>
              <button type="submit">Cadastrar</button>
            </form>
            <div className="btn">
              <button className="loginLink" onClick={() => handleRotation(-90)}>
                Faça seu login
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

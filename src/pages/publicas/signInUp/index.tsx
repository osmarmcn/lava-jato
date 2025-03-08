import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./acess.css"
import { emailRegex, passwordRegex, nameRegex } from "../../../regex"
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput"

export const Acesso = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

 
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");

 
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [signupNameError, setSignupNameError] = useState("")
  const [signupEmailError, setSignupEmailError] = useState("")
  const [signupPasswordError, setSignupPasswordError] = useState("")

  
  const handleRotation = (angle: number) => {
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(${angle}deg)`
    }
  }


  const validateEmail = (email: string) => (!email ? "Email é obrigatório." : emailRegex.test(email) ? "" : "Email inválido.")
  const validatePassword = (password: string) => (!password ? "Senha é obrigatória." : passwordRegex.test(password) ? "" : "A senha deve ter pelo menos 6 caracteres.")
  const validateName = (name: string) => (!name ? "Nome é obrigatório." : nameRegex.test(name) ? "" : "O nome deve ter pelo menos 5 letras.")

  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailError = validateEmail(loginEmail)
    const passwordError = validatePassword(loginPassword)

    setLoginEmailError(emailError);
    setLoginPasswordError(passwordError)

    
    if (!emailError && !passwordError) {
      
      if (loginEmail === "usuario@exemplo.com" && loginPassword === "123456") {
        navigate("/app/dashboard");
       console.log("Login realizado com sucesso!")
      } else {
        alert("Credenciais incorretas.")
      }
    }
  }

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const nameError = validateName(signupName)
    const emailError = validateEmail(signupEmail)
    const passwordError = validatePassword(signupPassword)

    setSignupNameError(nameError)
    setSignupEmailError(emailError)
    setSignupPasswordError(passwordError)

    if (!nameError && !emailError && !passwordError) {
      alert("Cadastro realizado com sucesso!")
    }
  }

  return (
    <div className="acesso-container">
      <div className="wrapper">
        <section className="container" ref={containerRef}>
         
          <div className="container-a">
            <h2 className="container-title">Bem-vindo!</h2>
            <div className="direction">
              <button className="navButton login" onClick={() => handleRotation(-90)}>Login</button>
              <button className="navButton signup" onClick={() => handleRotation(-180)}>Cadastro</button>
            </div>
          </div>

          
          <div className="container-b">
            <h1>Login</h1>
            <form className="form" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Digite seu email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                {loginEmailError && <span className="error">{loginEmailError}</span>}
              </div>
              <PasswordInput label="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} error={loginPasswordError} />
              <button type="submit">Entrar</button>
            </form>
            <div className="btn">
              <button className="signupLink" onClick={() => handleRotation(-180)}>Cadastre-se aqui</button>
            </div>
          </div>

     
          <div className="container-c">
            <h1>Cadastro</h1>
            <form className="form" onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Digite seu nome" value={signupName} onChange={(e) => setSignupName(e.target.value)} />
                {signupNameError && <span className="error">{signupNameError}</span>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Digite seu email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                {signupEmailError && <span className="error">{signupEmailError}</span>}
              </div>
              <PasswordInput label="Senha" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} error={signupPasswordError} />
              <button type="submit">Cadastrar</button>
            </form>
            <div className="btn">
              <button className="loginLink" onClick={() => handleRotation(-90)}>Faça seu login</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

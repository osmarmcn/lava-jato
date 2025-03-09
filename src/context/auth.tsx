import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthContext/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const userEmail = JSON.parse(userToken).email;
      const hasUser = JSON.parse(usersStorage).find((user: any) => user.email === userEmail);

      if (hasUser) {
        setUser({ email: hasUser.email });
      }
    }
  }, []);

  const signin = (email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "[]");

    const hasUser = usersStorage.find((user: any) => user.email === email);

    if (hasUser) {
      if (hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email });

        console.log("Usuário autenticado:", { email });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (nome: string, email: string, password: string) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "[]");

    const hasUser = usersStorage.find((user: any) => user.email === email);

    if (hasUser) {
      return "Já tem uma conta com esse E-mail";
    }

    const newUser = [...usersStorage, { nome, email, password }];
    localStorage.setItem("users_bd", JSON.stringify(newUser));

    console.log("Usuário cadastrado com sucesso:", { nome, email });
    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

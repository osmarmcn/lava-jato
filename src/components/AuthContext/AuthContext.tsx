
import { createContext } from "react";

// Defina a tipagem do contexto para evitar erros no TypeScript
interface AuthContextType {
  user: any;
  signed: boolean;
  signin: (email: string, password: string) => string | void;
  signup: (nome: string, email: string, password: string) => string | void;
  signout: () => void;
}

// Cria o contexto com um valor padrão vazio
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

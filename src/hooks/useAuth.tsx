
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext/AuthContext";



const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;

import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

// Definindo as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
  },
  {
    path: "/app/*",
    element: <PrivateRoutes />,
  },
]);

export default router;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HeaderPrivate } from "./components/headerPrivate/HeaderPrivate";
import PrivateRoutes from "./router/PrivateRoutes";
import PublicRoutes from "./router/PublicRoutes";
import { HeaderPublic } from "./components/headerPublic";
import { AuthProvider } from "./context/auth";
import "./App.css";


function AppContent() {
  const location = useLocation();

  return (
    <>
      <header>
        {location.pathname.startsWith("/app") ? <HeaderPrivate /> : <HeaderPublic />}
      </header>

      <main>
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/app/*" element={<PrivateRoutes />} />
        </Routes>
      </main>
    </>
  );
}

// Componente principal que envolve tudo com AuthProvider
function App() {
  return (
    <AuthProvider> {/* Agora o contexto de autenticação envolve toda a aplicação */}
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

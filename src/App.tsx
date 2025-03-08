import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { HeaderPrivate } from "./components/headerPrivate/HeaderPrivate";
import PrivateRoutes from "./router/PrivateRoutes";
import PublicRoutes from "./router/PublicRoutes";
import "./App.css";
import { HeaderPublic } from "./components/headerPublic";


function AppContent() {
  const location = useLocation()
  
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

// Componente principal que configura o BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App
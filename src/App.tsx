
import { HeaderPublic } from "./components/headerPublic"
import "./App.css"

import { HeaderPrivate } from "./components/headerPrivate/HeaderPrivate"
import { RouterProvider } from "react-router-dom"
import router from "./router/AppRoutes"


function App() {
 

  return (
    <>
       <header>
        
        {window.location.pathname.startsWith("/app") ? (
          <HeaderPrivate />
        ) : (
          <HeaderPublic /> 
        )}
      </header>

      <main>
        
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App

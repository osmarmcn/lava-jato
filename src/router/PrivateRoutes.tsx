import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/privadas/dashboard/dashboard'
import { Perfil } from '../pages/privadas/perfil/perfil'
import { Settings } from '../pages/privadas/settings/settings'

const PrivateRoutes: React.FC = () => {
 
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null
  }

  if (!isAuthenticated()) {
   
    return <Navigate to="/geral" replace />
  }

  return (
    <Routes>
    
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="settings" element={<Settings />} />
      
     
      <Route path="" element={<Navigate to="/app/dashboard" replace />} />
      
      
      <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
    </Routes>
  )
}

export default PrivateRoutes

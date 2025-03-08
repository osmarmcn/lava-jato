import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Acesso } from '../pages/publicas/signInUp'
import { Geral } from '../pages/publicas/geral'


const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      
      <Route path="/geral" element={<Geral />} />
      
      
      <Route path="/auth" element={<Acesso />} />
      
      
      <Route path="/" element={<Navigate to="/geral" replace />} />
      <Route path="*" element={<Navigate to="/geral" replace />} />
    </Routes>
  )
}

export default PublicRoutes
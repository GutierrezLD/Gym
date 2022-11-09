
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/Landing'
import Login from './pages/User/login/Login';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div >
  )
}
export default App
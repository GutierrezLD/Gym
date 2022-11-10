
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/Landing'
import Login from './pages/User/login/Login';
import Signup from './pages/User/signup/Signup';
import Recover from './pages/User/account_recovery/AccRec';
import ResetPassword from './pages/User/account_recovery/ResetPass';
import Index from './pages/index'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/recover' element={<Recover />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div >
  )
}
export default App
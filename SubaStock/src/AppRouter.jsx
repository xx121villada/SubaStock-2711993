import {Routes, Route, HashRouter} from 'react-router-dom'
import React from 'react'
import Inicio from './App'
import Login from './pages/Login/Login'

export default function AppRouter() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </HashRouter>
  )
}

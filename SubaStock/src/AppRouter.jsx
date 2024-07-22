import {Routes, Route, HashRouter} from 'react-router-dom'
import React from 'react'
import Inicio from './App'
import {DetalleSubasta} from"./components/detalleSubasta/DetalleSubasta";

export default function AppRouter() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/detalle-subasta" element={<DetalleSubasta />} />

        </Routes>
      </HashRouter>
  )
}

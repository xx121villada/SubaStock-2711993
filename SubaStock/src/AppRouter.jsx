import {Routes, Route, HashRouter} from 'react-router-dom'
import Inicio from './App'
import Login from './pages/Login/Login'
import Registro from './pages/Registro/Registro'
import { DetalleSubasta } from './components/detalleSubasta/DetalleSubasta'
import DetalleAnimales from './pages/detalleAnimales/DetalleAnimales'
import SesionIniciada from './pages/sesionIniciada/sesionIniciada'

export default function AppRouter() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route exact path='/detalle-subasta' element={<DetalleSubasta/>} />
          <Route exact path="/detalle-animales" element={<DetalleAnimales />} />
          <Route exact path="/sesion-iniciada" element={<SesionIniciada />} />
        </Routes>
      </HashRouter>
  )
}

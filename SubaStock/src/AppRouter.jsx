import {Routes, Route, HashRouter} from 'react-router-dom'
import Inicio from './App'
import Login from './pages/Login/Login.jsx'
import Registro from './pages/Registro/Registro.jsx'
import { DetalleSubasta } from './components/detalleSubasta/DetalleSubasta'
import DetalleAnimales from './pages/RegistroAnimales/RegistroAnimales.jsx'
import SesionIniciada from './pages/sesionIniciada/sesionIniciada'
import VisualizarAnimal from './pages/VisualizarAnimales/VisualizarAnimal';
import InsertarAlimentos from './pages/insertarAlimentos/InsertarAlimento.jsx'
import { Subastar } from './components/subastar/Subastar'
import RegistroAnimales from './pages/RegistroAnimales/RegistroAnimales.jsx'
import Animales from './pages/Animales/Animales'
import Crud from './pages/CRUD-xime/Crud.jsx'
import HistorialAliemto from './pages/HistoriaAlimento/HistorialAliemto.jsx'


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
          <Route exact path="insertar-alimentos" element={<InsertarAlimentos />}/>
          <Route exact path='/visualizar/:tipoAnimal' element={<VisualizarAnimal />} />
          <Route exact path="/registro-animales" element={<RegistroAnimales />} />
          <Route exact path='/ver-animales' element={<Animales />} />
          <Route exact path="Subastar" element={<Subastar />}/>
          <Route exact path="/crud-animal/:id" element={<Crud />} />
          <Route exact path="/historial-alimento/:idAnimal" element={<HistorialAliemto />} />
          </Routes>
      </HashRouter>
  )
}

import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Layout from "./components/Layout/Layout";
import Inicio from './App.jsx';
import Registro from "./pages/Registro/Registro.jsx";
import { DetalleSubasta } from "./components/detalleSubasta/DetalleSubasta";
import DetalleAnimales from "./pages/RegistroAnimales/RegistroAnimales.jsx";
import SesionIniciada from "./pages/sesionIniciada/sesionIniciada";
import VisualizarAnimal from "./pages/VisualizarAnimales/VisualizarAnimal";
import InsertarAlimentos from "./pages/insertarAlimentos/InsertarAlimento.jsx";
import { Subastar } from "./components/subastar/Subastar.jsx";
import RegistroAnimales from "./pages/RegistroAnimales/RegistroAnimales.jsx";
import Animales from "./pages/Animales/Animales";
import Crud from "./pages/CRUD-xime/Crud.jsx";
import InsertarEstadoPeso from "./pages/insertarEstadoPeso/InsertarEstadoPeso.jsx";
import SubastaGanada from "./pages/TarjetaGanadora/TarjetaGanada.jsx";
import VisualizarAnimalesSubasta from "./components/subastar/VisualizarAnimalesSubasta.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Medicamentos from "./pages/Medicamentos/Medicamentos.jsx";
import Subastas from "./pages/Subastas/Subastas.jsx";
import Favoritos from "./pages/favoritos/Favoritos.jsx";

export default function AppRouter() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Rutas sin Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* Rutas con Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/detalle-subasta/:idSubasta" element={<DetalleSubasta />} />
            <Route path="/detalle-animales" element={<DetalleAnimales />} />
            <Route path="/sesion-iniciada" element={<SesionIniciada />} />
            <Route path="/insertar-alimentos" element={<InsertarAlimentos />} />
            <Route path="/visualizar/:tipoAnimal" element={<VisualizarAnimal />} />
            <Route path="/registro-animales" element={<RegistroAnimales />} />
            <Route path="/ver-animales" element={<Animales />} />
            <Route path="/subastar" element={<VisualizarAnimalesSubasta />} />
            <Route path="/subastar/:idAnimal" element={<Subastar />} />
            <Route path="/crud-animal/:idAnimal" element={<Crud />} />
            <Route path="/insertar-peso-salud" element={<InsertarEstadoPeso />} />
            <Route path="/insertar-medicamentos" element={<Medicamentos />} />
            <Route path="/subasta-ganada" element={<SubastaGanada />} />
            <Route path="/subastas" element={<Subastas />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

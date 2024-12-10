import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Layout from "./components/Layout/Layout";
import Inicio from './App.jsx';
import Registro from "./pages/Registro/Registro.jsx";
import { DetalleSubasta } from "./components/detalleSubasta/DetalleSubasta";
import VisualizarAnimal from "./pages/VisualizarAnimales/VisualizarAnimal";
import { Subastar } from "./components/subastar/Subastar.jsx";
import RegistroAnimales from "./pages/RegistroAnimales/RegistroAnimales.jsx";
import Animales from "./pages/Animales/Animales";
import Crud from "./pages/CRUD-xime/Crud.jsx";
import VisualizarAnimalesSubasta from "./components/subastar/VisualizarAnimalesSubasta.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Subastas from "./pages/Subastas/Subastas.jsx";
import Favoritos from "./pages/favoritos/Favoritos.jsx";
import SesionIniciada from "./pages/sesionIniciada/UserIniciado.jsx";
import RecuperarContraseña from "./pages/RecuperarContraseña/RecuperarContraseña.jsx";
import ActualizarContraseña from "./pages/actualizarContraseña/Actualizar.jsx";
import MisSubastas from "./components/MisSubastas/MisSubastas.jsx";
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
            <Route path="/sesion-iniciada" element={<SesionIniciada />} />
            <Route path="/registro-animales" element={<RegistroAnimales />} />
            <Route path="/ver-animales" element={<Animales />} />
            <Route path="/visualizar/:tipoAnimal" element={<VisualizarAnimal />} />
            <Route path="/crud-animal/:idAnimal" element={<Crud />} />
            <Route path="/subastar" element={<VisualizarAnimalesSubasta />} />
            <Route path="/subastar/:idAnimal" element={<Subastar />} />
            <Route path="/detalle-subasta/:idSubasta" element={<DetalleSubasta />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/subastas" element={<Subastas />} />
            <Route path="/recuperar" element={<RecuperarContraseña/>} />
            <Route path="/actualizar-contra" element={<ActualizarContraseña/>} />
            <Route path="/mis-subastas" element={<MisSubastas />} />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
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
import Layout from "./components/Layout/Layout.jsx";
import SubastaGanada from "./pages/TarjetaGanadora/TarjetaGanada.jsx"
import VisualizarAnimalesSubasta from "./components/subastar/VisualizarAnimalesSubasta.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx"

import Medicamentos from "./pages/Medicamentos/Medicamentos.jsx";
import Subastas from "./pages/Subastas/Subastas.jsx";

export default function AppRouter() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />

        <Route path="/" element={<Layout />}/> 
          {/* Poner ruta aqui si se desea heredar el layout */}
          <Route index element={<Inicio />} />
          <Route exact path="/detalle-subasta/:idSubasta" element={<DetalleSubasta />} />
          <Route exact path="/detalle-animales" element={<DetalleAnimales />} />
          <Route exact path="/sesion-iniciada" element={<SesionIniciada />} />
          <Route
            exact
            path="insertar-alimentos"
            element={<InsertarAlimentos />}
          />
          <Route
            exact
            path="/visualizar/:tipoAnimal"
            element={<VisualizarAnimal />}
          />
          <Route
            exact
            path="/registro-animales"
            element={<RegistroAnimales />}
          />
          <Route exact path="/ver-animales" element={<Animales />} />
          <Route exact path="Subastar" element={<VisualizarAnimalesSubasta />} />
          <Route exact path="Subastar/:idAnimal" element={<Subastar />} />
          <Route exact path="/crud-animal/:idAnimal" element={<Crud />} />
          <Route
            exact
            path="/insertar-peso-salud"
            element={<InsertarEstadoPeso />}
          />
          <Route
            exact
            path="/insertar-medicamentos"
            element={<Medicamentos />}
          />
          <Route
            exact
            path="/subasta-ganada"
            element={<SubastaGanada />}
          />
          <Route path="/" element={<Layout />}>
            {/* Poner ruta aqui si se desea heredar el layout */}
            <Route index element={<Subastas />} />
            <Route
              exact
              path="/detalle-subasta/:idSubasta"
              element={<DetalleSubasta />}
            />
            <Route
              exact
              path="/detalle-animales"
              element={<DetalleAnimales />}
            />
            <Route exact path="/sesion-iniciada" element={<SesionIniciada />} />
            <Route
              exact
              path="insertar-alimentos"
              element={<InsertarAlimentos />}
            />
            <Route
              exact
              path="/visualizar/:tipoAnimal"
              element={<VisualizarAnimal />}
            />
            <Route
              exact
              path="/registro-animales"
              element={<RegistroAnimales />}
            />
            <Route exact path="/ver-animales" element={<Animales />} />
            <Route exact path="Subastar" element={<Subastar />} />
            <Route exact path="/crud-animal/:idAnimal" element={<Crud />} />
            <Route
              exact
              path="/insertar-peso-salud"
              element={<InsertarEstadoPeso />}
            />
            <Route
              exact
              path="/insertar-medicamentos"
              element={<Medicamentos />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
  
}

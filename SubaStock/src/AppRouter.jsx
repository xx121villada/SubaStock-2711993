import { Routes, Route, HashRouter } from "react-router-dom";
import Inicio from "./App";
import Login from "./pages/Login/Login.jsx";
import Registro from "./pages/Registro/Registro.jsx";
import { DetalleSubasta } from "./components/detalleSubasta/DetalleSubasta";
import DetalleAnimales from "./pages/RegistroAnimales/RegistroAnimales.jsx";
import SesionIniciada from "./pages/sesionIniciada/sesionIniciada";
import VisualizarAnimal from "./pages/VisualizarAnimales/VisualizarAnimal";
import InsertarAlimentos from "./pages/insertarAlimentos/InsertarAlimento.jsx";
import { Subastar } from "./components/subastar/Subastar";
import RegistroAnimales from "./pages/RegistroAnimales/RegistroAnimales.jsx";
import Animales from "./pages/Animales/Animales";
import Crud from "./pages/CRUD-xime/Crud.jsx";
import InsertarEstadoPeso from "./pages/insertarEstadoPeso/InsertarEstadoPeso.jsx";

import Medicamentos from "./pages/Informacion/Medicamentos.jsx";
import Layout from "./components/Layout/Layout.jsx";

export default function AppRouter() {
  return (

    <HashRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />

        <Route path="/" element={<Layout />}>
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
  );
}

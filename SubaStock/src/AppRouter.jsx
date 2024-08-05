import { Routes, Route, HashRouter } from "react-router-dom";
import React from "react";
import Inicio from "./App";

import Subastas from "./pages/Subastas/Subastas";
export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Subastas />} />
      </Routes>
    </HashRouter>
  );
}

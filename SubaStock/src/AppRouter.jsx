import { Routes, Route, HashRouter } from "react-router-dom";
import React from "react";
import Inicio from "./App";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
      </Routes>
    </HashRouter>
  );
}

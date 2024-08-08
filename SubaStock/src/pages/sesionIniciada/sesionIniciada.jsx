import React from 'react';
import '../sesionIniciada/sesionIniciada.css';

function SesionIniciada() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <span className="icon">🐷</span>
          <h1>BIENVENIDO A</h1>
          <h1>AGROSTOCK</h1>
          <span className="icon">🐮</span>
        </div>
        <div className="chicken-icon">
          <span className="icon">🐔</span>
        </div>
      </header>
      <main className="App-main">
        <div className="button-container">
          <button className="button">SUBASTAR</button>
          <button className="button">VER SUBASTAS</button>
          <button className="button">FAVORITOS</button>
          <button className="button">REGISTRAR ANIMAL</button>
          <button className="button">VER ANIMALES</button>
          <button className="button">CERRAR SESION</button>
        </div>
      </main>
    </div>
  );
}

export default SesionIniciada;

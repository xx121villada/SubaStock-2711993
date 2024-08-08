import { useState } from 'react';
import '../insertarAlimentos/insertarAlimentos.css';

function InsertarAlimento() {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const handleInsertarAlimento = () => {
    // Aquí se realiza la lógica para insertar el alimento
    console.log('Nombre:', nombre);
    console.log('Cantidad:', cantidad);
  };

  return (
    <div className="container">
      <h1>INSERTAR ALIMENTOS</h1>
      <div className="cow-container">
        <img src="cow.svg" alt="imagen" />
        <button>433DRG</button>
        <img src="cow.svg" alt="imagen" />
      </div>
      <div className="input-container">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <label htmlFor="cantidad">Cantidad:</label>
        <select id="cantidad" value={cantidad} onChange={handleCantidadChange}>
          <option value="">Escoja la cantidad de alimento</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <button onClick={handleInsertarAlimento}>INSERTAR ALIMENTO</button>
    </div>
  );
}

export default InsertarAlimento;
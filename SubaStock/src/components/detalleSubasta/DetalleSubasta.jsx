import { useState } from "react";
import "./detalleSubasta.css";
import { TablaHistorial } from "./TablaHistorial";
import { Carrusel } from "./Carrusel";

export function DetalleSubasta() {
  const [verTabla, setVerTabla] = useState(false);

  const toggleTabla = () => {
    setVerTabla((prevVerTabla) => !prevVerTabla);
  };

  return (
    <div className="body container-md p-2 d-flex flex-column align-items-center">
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className="back-button ms-2">
          <i className="bi bi-arrow-bar-left"></i> Regresar
        </button>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        <div className="content-carrusel flex-grow-1">
          <Carrusel />
        </div>

        <div className="d-flex flex-column d-md-flex-row info">
          <div className="d-flex flex-row flex-md-row align-items-center justify-content-center mb-3 titulo-favoritos">
            <h2 className="titulo mb-2 mb-md-0 me-md-2">Toro Cebú</h2>
            <button className="favoritos">☆</button>
          </div>
          <p className="tiempoRestante mb-3">Cierra en 2 días</p>
          <div className="fechas mb-3 text-center">
            <span className="d-block mx-1">Fecha Cierre: 23/06/2024</span>
            <span className="d-block mx-1">Fecha Apertura: 01/06/2024</span>
          </div>
          <p className="ofertaActual mb-3">Oferta Actual: 6.560.000 COP</p>
          <p className="descripcion mb-3">
            Toro cebú de 570 kilos, vacunas al día.
          </p>
          <div className="puja w-100 d-flex flex-column justify-content-center flex-md-row align-items-center mb-3">
            <input
              type="number"
              className="mx-2 my-2 w-50 input-puja"
              placeholder="Realice su puja"
            />
            <button className="pujar">Pujar</button>
          </div>
          <button className="historialPujas w-50" onClick={toggleTabla}>
            HISTORIAL DE PUJAS
          </button>
        </div>
      </div>
      {verTabla && <TablaHistorial />}
    </div>
  );
}

import "./detalleSubasta.css";

export function DetalleSubasta() {
  return (
    <div className="body">
      <i className="bi bi-arrow-bar-left"></i>
      <button className="back-button">Regresar</button>
      <img
        src="https://via.placeholder.com/300"
        alt="Toro Cebú"
        className="img"
      />
      <div className="titulo-favoritos">
        <h2 className="titulo">Toro Cebú</h2>
        <button className="favoritos">☆</button>
      </div>
      <p className="tiempoRestante">Cierra en 2 días</p>
      <div className="fechas">
        <span>Fecha Cierre: 23/06/2024</span>
        <span>Fecha Apertura: 01/06/2024</span>
      </div>
      <p className="ofertaActual">Oferta Actual: 6.560.000 COP</p>
      <p className="descripcion">Toro cebú de 570 kilos, vacunas al día.</p>
      <div className="puja">
        <input
          type="number"
          className="input-puja"
          placeholder="Realice su puja"
        />
        <button className="pujar">Pujar</button>
      </div>
      <button className="historialPujas">HISTORIAL DE PUJAS</button>
    </div>
  );
}

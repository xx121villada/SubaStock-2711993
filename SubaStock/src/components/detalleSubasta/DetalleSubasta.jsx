import { useState } from "react";
import styles from "./detalleSubasta.module.css";
import { TablaHistorial } from "./TablaHistorial";
import { Carrusel } from "./Carrusel";
import { useLoaderData } from "react-router-dom";
import LazyCarousel from "../Subastas/LazyCarousel";

export function DetalleSubasta() {
  const [verTabla, setVerTabla] = useState(false);

  const toggleTabla = () => {
    setVerTabla((prevVerTabla) => !prevVerTabla);
  };

  return (
    <div className={`container-md p-2 d-flex flex-column align-items-center ${styles.body}`}>
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className={styles.backButton}>
          <i className="bi bi-arrow-bar-left"></i> Regresar
        </button>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="content-carrusel flex-grow-1">
          <Carrusel />
        <div className={styles.contentCarrusel}>
          <LazyCarousel imgs={
          [
            "https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg",
          ]
        }/>
        </div>

        <div className={`d-flex flex-column d-md-flex-row ${styles.info}`}>
          <div className={`d-flex flex-row flex-md-row align-items-center justify-content-center mb-3 ${styles.tituloFavoritos}`}>
            <h2 className={`${styles.titulo} mb-2 mb-md-0 me-md-2`}>Toro Cebú</h2>
            <button className={styles.favoritos}>☆</button>
          </div>
          <p className={`mb-3 ${styles.tiempoRestante}`}>Cierra en 2 días</p>
          <div className={`mb-3 text-center ${styles.fechas}`}>
            <span className="d-block mx-1">Fecha Cierre: 23/06/2024</span>
            <span className="d-block mx-1">Fecha Apertura: 01/06/2024</span>
          </div>
          <p className={`mb-3 ${styles.ofertaActual}`}>Oferta Actual: 6.560.000 COP</p>
          <p className={`mb-3 ${styles.descripcion}`}>
            Toro cebú de 570 kilos, vacunas al día.
          </p>
          <div className={`w-100 d-flex flex-column justify-content-center flex-md-row align-items-center mb-3 ${styles.puja}`}>
            <input
              type="number"
              className={`mx-2 my-2 w-50 ${styles.inputPuja}`}
              placeholder="Realice su puja"
            />
            <button className={styles.pujar}>Pujar</button>
          </div>
          <button className={`w-50 ${styles.historialPujas}`} onClick={toggleTabla}>
            HISTORIAL DE PUJAS
          </button>
        </div>
      </div>
      {verTabla && <TablaHistorial />}
    </div>
    </div>
  );
}

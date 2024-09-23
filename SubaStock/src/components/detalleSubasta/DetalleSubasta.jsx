import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./detalleSubasta.module.css";
import { TablaHistorial } from "./TablaHistorial";
import LazyCarousel from "../Subastas/LazyCarousel";
import Temporizador from "../Subastas/Temporizador";

export function DetalleSubasta() {
  const { idSubasta } = useParams();
  const navigate = useNavigate();
  const [subasta, setSubasta] = useState(null);
  const [verTabla, setVerTabla] = useState(false);

  useEffect(() => {
    fetch(`https://apisubastock.cleverapps.io/subasta/Obtener/${idSubasta}`)
      .then((response) => response.json())
      .then((data) => setSubasta(data))
      .catch((error) => console.error("Error al cargar la subasta:", error));
  }, [idSubasta]);

  const toggleTabla = () => {
    setVerTabla((prevVerTabla) => !prevVerTabla);
  };

  const handleBack = () => {
    navigate(-2);
  };

  const [esTiempoCritico, setTiempoCritico] = useState(false);

  if (!subasta) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={`container-md p-2 d-flex flex-column align-items-center ${styles.body}`}>
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className={styles.backButton} onClick={handleBack}>
          <i className="bi bi-arrow-bar-left"></i> Regresar
        </button>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="content-carrusel flex-grow-1">
        <div className={styles.contentCarrusel}>
          <LazyCarousel imgs={[subasta.subasta.imagenUrl] || ["https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg"]} />
        </div>

        <div className={`d-flex flex-column d-md-flex-row ${styles.info}`}>
          <div className={`d-flex flex-row flex-md-row align-items-center justify-content-center mb-3 ${styles.tituloFavoritos}`}>
            <h2 className={`${styles.titulo} mb-2 mb-md-0 me-md-2`}>{subasta.subasta.tituloSubasta}</h2>
            <button className={styles.favoritos}>☆</button>
          </div>
          <span
          className={`badge rounded-pill ${styles.tiempoRestante}`}
          style={{
            backgroundColor: esTiempoCritico
              ? "#ff0000"
              : "var(--primary-color)",
            width: "fit-content",
          }}
          >
          Cierra en&nbsp;
          {
            <Temporizador
              fechaFin={subasta.subasta.fechaFin}
              onTiempoCritico={() => setTiempoCritico(true)}
              minutosCriticos={5}
            />
          }
        </span>
          <div className={`mb-3 text-center ${styles.fechas}`}>
            <span className="d-block mx-1">Fecha Cierre: {subasta.subasta.fechaFin}</span>
            <span className="d-block mx-1">Fecha Apertura: {subasta.subasta.fechaInicio}</span>
          </div>
          <p className={`mb-3 ${styles.ofertaActual}`}>Oferta Actual: {subasta.subasta.pujaMinima} COP</p>
          <p className={`mb-3 ${styles.descripcion}`}>{subasta.subasta.descripcion}</p>
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

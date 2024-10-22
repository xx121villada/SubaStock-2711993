import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./detalleSubasta.module.css";
import { TablaHistorial } from "./TablaHistorial";
import LazyCarousel from "../Subastas/LazyCarousel";
import Temporizador from "../Subastas/Temporizador";
import Swal from 'sweetalert2';

export function DetalleSubasta() {
  const { idSubasta } = useParams();
  const navigate = useNavigate();
  const [subasta, setSubasta] = useState(null);
  const [idUsuario, setIdUsuario] = useState("");
  const [valorPuja, setValorPuja] = useState("");
  const [verTabla, setVerTabla] = useState(false);

  useEffect(() => {
    fetch(`https://apisubastock.cleverapps.io/subasta/Obtener/${idSubasta}`)
      .then((response) => response.json())
      .then((data) => {
        
        const valorActual = data?.valorActual;
  
        if (valorActual !== undefined && valorActual !== null) {
          const valorFormateado = valorActual.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
          });
  
          setSubasta({
            ...data,
            valorActualFormateado: valorFormateado,  
          });
        } else {
          setSubasta({
            ...data,
            valorActualFormateado: 'Sin oferta actual', 
          });
        }
      })
      .catch((error) =>
        console.error("Error al cargar la subasta:", error),
        Swal.fire({
          text: "No se pudo cargar la subasta",
          icon: "error",
          confirmButtonText: "Continuar",
        })
      );
  
    const storedIdUsuario = sessionStorage.getItem("idUsuario");
    if (storedIdUsuario) {
      setIdUsuario(storedIdUsuario);
    }
  }, [idSubasta]);

  const handlePujar = async () => {
    if (!valorPuja) {
      Swal.fire({
        text: "Por favor, introduce un valor de puja.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const valorActual = subasta.valorActual;

    if (parseFloat(valorPuja) <= valorActual) {
      Swal.fire({
        text: `La puja debe ser mayor a la oferta actual de ${subasta.valorActualFormateado}.`,
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const datosPuja = {
      idSubasta: idSubasta,
      idUsuario: idUsuario,  
      valor: valorPuja,
    };

    try {
      const response = await fetch("https://apisubastock.cleverapps.io/puja/Insertar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosPuja),
      });

      const resultado = await response.json();

      if (response.ok) {
        Swal.fire({
          text: "Puja realizada exitosamente",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          text: "No se pudo realizar la puja",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "Hubo un error al realizar la puja. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

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
          <LazyCarousel imgs={[subasta.subasta.imagenUrl, subasta.subasta.imagenUrl2, subasta.subasta.imagenUrl3, subasta.subasta.imagenUrl4, subasta.subasta.imagenUrl5].filter(img=>img!= null) || ["https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg"]} />
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
          <p className={`mb-3 ${styles.ofertaActual}`}>Oferta Actual: {subasta.valorActualFormateado} COP</p>
          <p className={`mb-3 ${styles.descripcion}`}>{subasta.subasta.descripcion}</p>
          <div className={`w-100 d-flex flex-column justify-content-center flex-md-row align-items-center mb-3 ${styles.puja}`}>
          <input
                type="number"
                className={`mx-2 my-2 w-50 ${styles.inputPuja}`}
                placeholder="Realice su puja"
                value={valorPuja}
                onChange={(e) => setValorPuja(e.target.value)}
              />
              <button className={styles.pujar} onClick={handlePujar}>Pujar</button>
          </div>
          <button className={`w-50 ${styles.historialPujas}`} onClick={toggleTabla}>
            HISTORIAL DE PUJAS
          </button>
        </div>
      </div>
      {verTabla && <TablaHistorial idAnimal={subasta.subasta.idAnimal}/>}
    </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./detalleSubasta.module.css";
import { TablaHistorial } from "./TablaHistorial";
import LazyCarousel from "../Subastas/LazyCarousel";
import Temporizador from "../Subastas/Temporizador";
import Swal from "sweetalert2";
import useAuth from "../../contexts/AuthContext";

export function DetalleSubasta() {
  const { idSubasta } = useParams();
  const navigate = useNavigate();
  const [subasta, setSubasta] = useState(null);
  const [idUsuario, setIdUsuario] = useState("");
  const [valorPuja, setValorPuja] = useState("");
  const [verTabla, setVerTabla] = useState(false);
  const [cargando, setCargando] = useState(true);
  const { authState } = useAuth();

  useEffect(() => {
    setCargando(true);
    fetch(`https://apisubastock.cleverapps.io/subasta/Obtener/${idSubasta}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la subasta");
        }
        return response.json();
      })
      .then((data) => {
        const valorActual = data?.valorActual;

        if (valorActual !== undefined && valorActual !== null) {
          const valorFormateado = valorActual.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
          });

          setSubasta({
            ...data,
            valorActualFormateado: valorFormateado,
          });
        } else {
          setSubasta({
            ...data,
            valorActualFormateado: "Sin oferta actual",
          });
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar la subasta:", error);
        setCargando(false);
        Swal.fire({
          text: "No se pudo cargar la subasta",
          icon: "error",
          confirmButtonText: "Continuar",
        });
      });

    const storedIdUsuario = sessionStorage.getItem("idUsuario");
    if (storedIdUsuario) {
      setIdUsuario(storedIdUsuario);
    }
  }, [idSubasta]);

  const handlePujar = async () => {
    console.log(authState);
    if (!authState) {
      Swal.fire({
        text: "Debes iniciar sesión para realizar una puja.",
        icon: "warning",
        confirmButtonText: "Iniciar sesión",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

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
      idUsuario: authState.idUsuario,
      valor: valorPuja,
    };

    try {
      const response = await fetch(
        "https://apisubastock.cleverapps.io/puja/Insertar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosPuja),
        }
      );

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

  if (cargando) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!subasta) {
    return <div>No se pudo cargar la subasta.</div>;
  }

  return (
    <div className={`container-md ${styles.subastaContainer}`}>
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className={styles.backButton} onClick={handleBack}>
          <i className="bi bi-arrow-bar-left"></i> Regresar
        </button>
      </div>

      <div className={styles.carruselInfoContainer}>
        <div className={styles.carouselContainer}>
          <LazyCarousel
            imgs={
              [
                subasta.subasta.imagenUrl,
                subasta.subasta.imagenUrl2,
                subasta.subasta.imagenUrl3,
                subasta.subasta.imagenUrl4,
                subasta.subasta.imagenUrl5,
              ].filter((img) => img != null) || [
                "https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg",
              ]
            }
            size
          />
        </div>

        <div className={styles.infoContainer}>
          <h2 className={styles.titulo}>{subasta.subasta.tituloSubasta}</h2>

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
            <Temporizador
              fechaFin={subasta.subasta.fechaFin}
              onTiempoCritico={() => setTiempoCritico(true)}
              minutosCriticos={5}
            />
          </span>

          <div className={`mb-3 text-center ${styles.fechas}`}>
            <span className="d-block mx-1">
              Fecha Cierre: {subasta.subasta.fechaFin}
            </span>
            <span className="d-block mx-1">
              Fecha Apertura: {subasta.subasta.fechaInicio}
            </span>
          </div>

          <p className={`${styles.ofertaActual}`}>
            Oferta Actual: {subasta.valorActualFormateado} COP
          </p>
          <p className={`${styles.descripcion}`}>
            {subasta.subasta.descripcion}
          </p>

          <div className={styles.pujaContainer}>
            <input
              type="number"
              className={styles.inputPuja}
              placeholder="Realice su puja"
              value={valorPuja}
              onChange={(e) => setValorPuja(e.target.value)}
            />
            <button className={styles.pujar} onClick={handlePujar}>
              Pujar
            </button>
          </div>

          <button className={styles.historialPujas} onClick={toggleTabla}>
            HISTORIAL DE PUJAS
          </button>
        </div>
      </div>
      {verTabla && <TablaHistorial idAnimal={subasta.subasta.idAnimal} />}
    </div>
  );
}

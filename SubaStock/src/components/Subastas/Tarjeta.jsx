import LazyCarousel from "./LazyCarousel";
import { useState } from "react";
import Temporizador from "./Temporizador";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */

const Tarjeta = ({
  idSubasta,
  fechaFin,
  tituloSubasta,
  imagenUrl,
  imagenUrl2,
  imagenUrl3,
  imagenUrl4,
  imagenUrl5,
}) => {
  const [esTiempoCritico, setTiempoCritico] = useState(false);
  const [esFavorito, setEsFavorito] = useState(false);

  const toggleFavorito = () => {
    setEsFavorito(!esFavorito);
    console.log(
      esFavorito ? "Subasta eliminada de favoritos" : "Subasta agregada a favoritos"
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: 500,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      className="d-flex flex-column"
    >
      {/* Enlace solo en la sección de imagen */}
      <Link
        to={`/detalle-subasta/${idSubasta}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <LazyCarousel
          imgs={[
            imagenUrl,
            imagenUrl2,
            imagenUrl3,
            imagenUrl4,
            imagenUrl5,
          ].filter((img) => img !== null)}
        />
      </Link>

      <div className="p-3 d-flex flex-column gap-2">
        {/* Título con enlace */}
        <Link
          to={`/detalle-subasta/${idSubasta}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="fs-4 text-bold">{tituloSubasta}</span>
        </Link>

        {/* Botón de favorito */}
        <span
          onClick={toggleFavorito}
          style={{ cursor: "pointer", fontSize: "1.5rem", marginLeft: '10px' }}
        >
          {esFavorito ? "★" : "☆"}
        </span>

        <span
          className={`badge rounded-pill`}
          style={{
            backgroundColor: esTiempoCritico ? "#ff0000" : "var(--primary-color)",
            width: "fit-content",
          }}
        >
          Cierra en&nbsp;
          <Temporizador
            fechaFin={fechaFin}
            onTiempoCritico={() => setTiempoCritico(true)}
            minutosCriticos={5}
          />
        </span>

        <div className="my-1 d-flex flex-wrap flex-column gap-1">
          <div className="ubicacionDetalles d-flex gap-2 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="var(--primary-color)"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span className="fs-5">Colombia</span>
          </div>

          <div className="subastasDetalles d-flex gap-2 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="var(--primary-color)"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
            <span className="fs-5">{Math.floor(Math.random() * 30 + 1)}</span>
          </div>
        </div>
      </div>

      <hr style={{ height: 2 }} />

      <div className="detallesPuja px-3 d-flex flex-column">
        <span style={{ fontFamily: "0.9rem", color: "#00000095" }}>
          Puja más alta:{" "}
        </span>
        <span className="fs-4" style={{ fontWeight: "bold" }}>
          COP {"3000000"}
        </span>
      </div>
    </div>
  );
};

export default Tarjeta;

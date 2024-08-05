import LazyCarousel from "./Subastas/LazyCarousel";
import { useState } from "react";
import Temporizador from "./Temporizador";

/* eslint-disable react/prop-types */

const Tarjeta = ({ fechaFin, titulo, imgs }) => {
  const [esTiempoCritico, setTiempoCritico] = useState(false);

  return (
    <div style={{ width: 240, height: 400 }} className="d-flex flex-column">
      <LazyCarousel
        imgs={
          imgs || [
            "https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg",
          ]
        }
      />
      <div className="p-3 d-flex flex-column gap-2">
        <span className="fs-4 text-bold">{titulo}</span>
        <span
          className={`badge rounded-pill`}
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
              fechaFin={fechaFin}
              onTiempoCritico={() => setTiempoCritico(true)}
              minutosCriticos={5}
            />
          }
        </span>
      </div>
    </div>
  );
};

export default Tarjeta;

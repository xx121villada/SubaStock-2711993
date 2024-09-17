import { Link } from "react-router-dom";
import "../sesionIniciada/sesionIniciada.css";
import img_principal from "../sesionIniciada/img/img_principalR.png";

import Swal from "sweetalert2";
import { useEffect, useRef } from "react";

function SesionIniciada() {
  const imgRef = useRef(null);

  useEffect(() => {
    const changeColor = () => {
      const randomDegree = Math.floor(Math.random() * 720) - 360;
      imgRef.current.style.filter = `hue-rotate(${randomDegree}deg)`;
      imgRef.current.style.transition = "filter 0.5s";
    };

    const interval = setInterval(changeColor, 500);
    return () => clearInterval(interval);
  }, []);

  const Cerrar = () => {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar Sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sesión cerrada", "Tu sesión ha sido finalizada", "success");
        localStorage.removeItem("idAnimal");
        localStorage.removeItem("idUsuario");

        window.location.hash = "/";
      }
    });
  };

  return (
    <div className="sesion-container">
      <header className="App-header">
        <h1 className="centered-title">BIENVENIDO A AGROSTOCK</h1>
      </header>
      <div className="content-container">
        <div className="image-container">
          <img
            src={img_principal}
            alt="Imagen descriptiva"
            className="left-image"
            ref={imgRef}
          />
          <main className="App-main">
            <div className="button-container">
              <Link to="/Subastar">
                <button className="button">SUBASTAR</button>
              </Link>
              <button className="button">VER SUBASTAS</button>
              <button className="button">FAVORITOS</button>
              <Link to="/registro-animales">
                <button className="button">REGISTRAR ANIMAL</button>
              </Link>
              <Link to="/ver-animales">
                <button className="button">VER ANIMALES</button>
              </Link>
              <button className="button" onClick={Cerrar}>
                CERRAR SESION
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SesionIniciada;

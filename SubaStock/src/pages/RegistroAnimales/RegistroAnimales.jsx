import "./RegistroAnimales.css";
import cerdo from "../CRUD-xime/img/1.png";
import vaca from "../CRUD-xime/img/2.png";
import pollo from "../CRUD-xime/img/3.png";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const RegistroAnimales = () => {
  const form = useRef();
  const [animales, setAnimales] = useState({
    marca: "",
    especie: "",
    raza: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimales({ ...animales, [name]: value });
  };

  const { getToken, isLogged, isLoading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...animales,
    };

    fetch( `${import.meta.env.VITE_API_URL}/animal/Insertar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status) {
          form.current.reset();
          Swal.fire({
            title: data.message,
            icon: "success",
            confirmButtonText: "Continuar",
          });
        } else {
          Swal.fire({
            title: data.message,
            icon: "error",
            confirmButtonText: "Continuar",
          });
        }
      });
  };

  if (!isLogged && !isLoading) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-Animales">
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className="back-button ms-2">
          <Link
            to={"/sesion-iniciada"}
            className="text-decoration-none text-dark"
          >
            Regresar
          </Link>
        </button>
      </div>
      <div className="registro-container">
        <h1>REGISTRO DE ANIMALES</h1>
        <div className="logos-container">
          <img src={cerdo} alt="Cerdo" />
          <img src={vaca} alt="Vaca" />
          <img src={pollo} alt="Pollo" />
        </div>
        <form onSubmit={handleSubmit} ref={form} className="registro-animales">
          <div className="animales-div">
            <label htmlFor="marca">ID</label>
            <input
              className="campos"
              type="text"
              id="marca"
              name="marca"
              placeholder="Ingrese la identificación del animal"
              onChange={handleChange}
              required
            />
          </div>
          <div className="animales-div">
            <label htmlFor="especie">ESPECIE</label>
            <select
              className="campos"
              id="especie"
              name="especie"
              required
              onChange={handleChange}
            >
              <option value="">Seleccione una especie</option>
              <option value="Bovino">Bovino</option>
              <option value="Porcino">Porcino</option>
              <option value="Caprino">Caprino</option>
              <option value="Equino">Equino</option>
              <option value="Avicultura">Avicultura</option>
            </select>
          </div>
          <div className="animales-div">
            <label htmlFor="raza">RAZA</label>
            <input
              className="campos"
              type="text"
              id="raza"
              name="raza"
              placeholder="Ingrese la raza del animal"
              required
              onChange={handleChange}
            />
          </div>
          {/* <div className="animales-div">
                        <label htmlFor="peso">Peso (Kg)</label>
                        <input
                            className="campos"
                            type="number"
                            id="peso"
                            name="peso"
                            placeholder="Ingrese el peso del animal en Kg"
                            required
                            step="0.01"
                            onChange={handleChange}
                        />
                    </div> */}
          <button type="submit" className="registro-button">
            REGISTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistroAnimales;

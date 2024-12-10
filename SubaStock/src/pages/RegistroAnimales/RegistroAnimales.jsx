import "./RegistroAnimales.css";
import { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../contexts/AuthContext";
import { animalBreeds } from "./Especies";

const RegistroAnimales = ({ onRegistroExitoso }) => {
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

    fetch(`${import.meta.env.VITE_API_URL}/animal/Insertar`, {
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
          }).then((result) => {
            if (result.isConfirmed && onRegistroExitoso) {
              onRegistroExitoso();
            }
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

  const filteredBreeds = animalBreeds.find((animal) => animal.species === animales.especie)?.breeds || [];

  return (
    <div className="container-Animales">
      <div className="registro-main">
        <div className="registro-container">
          <h1>REGISTRO DE ANIMALES</h1>
          <div className="form-container">
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
                  {animalBreeds.map((animal) => (
                    <option key={animal.species} value={animal.species}>
                      {animal.species}
                    </option>
                  ))}
                </select>
              </div>
              <div className="animales-div">
                <label htmlFor="raza">RAZA</label>
                <select
                  className="campos"
                  id="raza"
                  name="raza"
                  required
                  onChange={handleChange}
                  disabled={!animales.especie}
                >
                  <option value="">Seleccione una raza</option>
                  {filteredBreeds.map((breed, index) => (
                    <option key={index} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="registro-button">
                REGISTRAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroAnimales;

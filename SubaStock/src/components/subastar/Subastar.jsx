import styles from "./subastar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export function Subastar() {
  const [idUsuario, setIdUsuario] = useState("");
  const [idAnimal, setIdAnimal] = useState("");
  const [imagenes, setImagenes] = useState(null);
  const [imagenPreviews, setImagenPreviews] = useState([]);

  useEffect(() => {
    const storedIdUsuario = sessionStorage.getItem("idUsuario");
    if (storedIdUsuario) {
      setIdUsuario(storedIdUsuario);
    }

    const storedIdAnimal = localStorage.getItem("idAnimal");
    if (storedIdAnimal) {
      setIdAnimal(storedIdAnimal);
    }
  }, []);

  const [values, setValues] = useState({
    pujaMinima: "",
    fechaInicio: "",
    fechaFin: "",
    tituloSubasta: "",
    descripcion: "",
  });

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      idUsuario: idUsuario,
      idAnimal: idAnimal,
    }));
  }, [idUsuario, idAnimal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImagenes(files);
  
    const newPreviews = [];
  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        newPreviews.push(reader.result);
  
        if (newPreviews.length === files.length) {
          setImagenPreviews(newPreviews);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    imagenes.forEach((imagen, index) => {
      if (index === 0) {
        formData.append("imagen", imagen);
      } else {
        formData.append(`imagen${index}`, imagen);
      }
    });

    fetch(`https://apisubastock.cleverapps.io/subasta/Insertar/${idAnimal}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if(data.status){
          Swal.fire({
            title: 'Subasta Creada con exito',
            icon:'success',
          })
        }else{
          Swal.fire({
            title: 'Error al crear la subasta',
            text: data.message,
            icon: 'error',
          })
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        Swal.fire({
          title: 'Error al crear la subasta',
          text: err.message,
          icon: 'error',
        })
      });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div
          className={`${styles.body} container-md p-4 d-flex flex-column align-items-center bg-light shadow-sm rounded`}
        >
          <div className="w-100 d-flex justify-content-start align-items-center mb-3">
            <button className={styles.backButton}>
              <Link to={"/sesion-iniciada"} className="text-decoration-none text-dark">
                Regresar
              </Link>
            </button>
          </div>

          <h2 className="text-center mb-4">Subastar Animal</h2>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
            <div className="input-group">
              <label className="form-label">Agregar Imágenes</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
              />
              <div className={`${styles.containerImages} mt-3`}>
                {imagenPreviews.length > 5 ? (
                  <div className={styles.errorMessage}>
                    <p>Solo se permiten hasta 5 imágenes. Elimina algunas.</p>
                  </div>
                ) : (
                  imagenPreviews.map((preview, index) => (
                    <img
                      key={index}
                      src={preview}
                      alt={`Imagen subasta ${index + 1}`}
                      className={styles.imagePreview}
                    />
                  ))
                )}
              </div>
            </div>

            <div className={`${styles.info} ms-md-4 mt-4 mt-md-0`}>
              <div className="mb-3">
                <label htmlFor="tituloSubasta">Nombre de la Subasta</label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Ingrese el Título"
                  id="tituloSubasta"
                  name="tituloSubasta"
                />
              </div>

              <div className="mb-3">
                <label>Fechas Límites</label>
                <div className="d-flex justify-content-between">
                  <div>
                    <label htmlFor="fechaInicio">Fecha Inicio:</label>
                    <input
                      type="date"
                      onChange={handleChange}
                      name="fechaInicio"
                      id="fechaInicio"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label htmlFor="fechaFin">Fecha Fin:</label>
                    <input
                      type="date"
                      onChange={handleChange}
                      name="fechaFin"
                      id="fechaFin"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  className="form-control"
                  placeholder="Ingrese la Descripción"
                  onChange={handleChange}
                  name="descripcion"
                  id="descripcion"
                  rows="3"
                />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <label htmlFor="pujaMinima">Valor Inicial de la Puja:</label>
                <input
                  type="number"
                  className="form-control w-50"
                  placeholder="Valor Inicial"
                  onChange={handleChange}
                  name="pujaMinima"
                  id="pujaMinima"
                />
              </div>

              <button className={`${styles.subastar} w-100 mt-3`} type="submit">
                Subastar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

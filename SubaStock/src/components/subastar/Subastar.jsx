import styles from "./styles/subastar.module.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import BotonVolver from "../UI/BotonVolver";

export function Subastar() {
  const [idUsuario, setIdUsuario] = useState("");
  const [idAnimal, setIdAnimal] = useState("");
  const [marca, setMarca] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [imagenPreviews, setImagenPreviews] = useState([]);

  useEffect(() => {
    const storedIdUsuario = sessionStorage.getItem("idUsuario");
    const storedMarca = localStorage.getItem("marca");
    const storedIdAnimal = localStorage.getItem("idAnimal");

    if (storedIdUsuario) setIdUsuario(storedIdUsuario);
    if (storedMarca) setMarca(storedMarca);
    if (storedIdAnimal) setIdAnimal(storedIdAnimal);
  }, []);

  const [values, setValues] = useState({
    pujaMinima: "",
    fechaInicio: "",
    fechaFin: "",
    tituloSubasta: "",
    descripcion: "",
  });

  useEffect(() => {
    setValues((prev) => ({ ...prev, idUsuario, idAnimal }));
  }, [idUsuario, idAnimal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + imagenes.length > 5) {
      Swal.fire({
        title: "Límite de imágenes superado",
        text: "Solo puedes subir un máximo de 5 imágenes.",
        icon: "warning",
      });
      return;
    }

    setImagenes((prev) => [...prev, ...files]);

    const newPreviews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        if (newPreviews.length === files.length) {
          setImagenPreviews((prev) => [...prev, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    imagenes.forEach((img, index) =>
      formData.append(index === 0 ? "imagen" : `imagen${index}`, img)
    );

    fetch(`https://apisubastock.cleverapps.io/subasta/Insertar/${idAnimal}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) =>
        Swal.fire({
          title: data.status ? "Subasta Creada con Éxito" : "Error",
          text: data.message || "",
          icon: data.status ? "success" : "error",
        })
      )
      .catch((err) =>
        Swal.fire({
          title: "Error al crear la subasta",
          text: err.message,
          icon: "error",
        })
      );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.header}>
          <BotonVolver ruta={"/sesion-iniciada"} />
          <h2>Subastar Animal con Marca: {marca}</h2>
        </div>

        <div className={styles.uploadSection}>
          <label className={styles.label}>Selecciona hasta 5 imágenes:</label>
          <p className={styles.instructions}>
            Selecciona las imágenes juntas para mostrar al animal en su
            totalidad.
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
          <div className={styles.imageCarousel}>
            {imagenPreviews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Imagen ${idx + 1}`}
                className={styles.image}
              />
            ))}
          </div>
        </div>

        <div className={styles.fields}>
          <input
            type="text"
            name="tituloSubasta"
            placeholder="Nombre de la Subasta"
            onChange={handleChange}
            className={styles.input}
          />
          <textarea
            name="descripcion"
            rows="3"
            placeholder="Descripción de la Subasta"
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.dateFields}>
            <input
              type="date"
              name="fechaInicio"
              onChange={handleChange}
              className={styles.dateInput}
            />
            <input
              type="date"
              name="fechaFin"
              onChange={handleChange}
              className={styles.dateInput}
            />
          </div>
          <input
            type="number"
            name="pujaMinima"
            placeholder="Puja Mínima"
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Subastar
        </button>
      </form>
    </div>
  );
}

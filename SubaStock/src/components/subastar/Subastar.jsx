import "./subastar.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Subastar() {
  const [idUsuario, setIdUsuario] = useState('');
  const [idAnimal, setIdAnimal] = useState('');

  useEffect(() => {
    const storedIdUsuario = localStorage.getItem('idUsuario');
    if (storedIdUsuario) {
      setIdUsuario(storedIdUsuario);
    }

    const storedIdAnimal = localStorage.getItem('idAnimal');
    if (storedIdAnimal) {
      setIdAnimal(storedIdAnimal);
    }

  }, []);
  const [values, setValues] = useState({
    pujaMinima: '',
    fechaInicio: '',
    fechaFin: '',
    tituloSubasta: '',
    descripcion: '',
  });

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      idUsuario: idUsuario,
      idAnimal: idAnimal,
    }));
  },[idUsuario, idAnimal]);

  const [imagen, setImagen] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImagenPreview(reader.result);
      };
  
      reader.readAsDataURL(file);
    } else {
      setImagenPreview(null);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
    if (imagen) {
      formData.append('imagen', imagen);
    }

    fetch('http://localhost:8000/subasta/Insertar', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(imagen)
        console.log(values)

        
      })
      .catch((err) => {
        console.error('Error:', err);
      })
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="body container-md p-2 d-flex flex-column align-items-center bg-white">
          <div className="w-100 d-flex justify-content-start align-items-center mb-3">
            <button className="back-button ms-2">
              <Link to={'/sesion-iniciada'} className="text-decoration-none text-dark">
              Regresar
              </Link>
            </button>
          </div>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="content-agregar-imagen">
              <h6>Agregar Imagenes</h6>
              <input type="file"
                id="imagen"
                onChange={handleImageChange}
                accept="image/*"
                name="imagen"
              />
            </div>
            {imagenPreview && (
              <img
                src={imagenPreview}
                alt="Imagen subasta"
                className="img-fluid mx-auto d-block w-50"
                style={{ maxHeight: "200px", maxWidth: "200px" }}
              />
            )}

            <div className="d-flex flex-column d-md-flex-row info">
              <div className="d-flex flex-row flex-md-row align-items-center justify-content-center mb-3 content-titulo">
                <label className="mb-2 mb-md-0 me-md-2">Ingresa el nombre de la subasta</label>
                <input type="text"
                  onChange={handleChange}
                  className="titulo mt-4"
                  placeholder="Ingrese El Titulo"
                  id="tituloSubasta"
                  name="tituloSubasta"
                />
              </div>
              <h6 className="tiempoRestante mb-2 fs-3">Fechas Limites</h6>
              <div className="fechas mb-3 text-center d-flex flex-column">
                <h6 className="my-3 ">Fecha Inicio:</h6>
                <input className="d-block mx-1 my-1"
                  type="date"
                  onChange={handleChange}
                  name="fechaInicio"
                  id="fechaInicio"
                />
                <h6 className="my-3">Fecha Cierre:</h6>
                <input className="d-block mx-1 my-1"
                  type="date"
                  onChange={handleChange}
                  name="fechaFin"
                  id="fechaFin"
                />
              </div>
              <div className="d-flex flex-column my-2 text-center">
                <h6 className="mb-3">Descripcion:</h6>
                <input className="descripcion mb-3"
                  placeholder="Ingrese Descripcion"
                  onChange={handleChange}
                  name="descripcion"
                  id="descripcion"
                />
              </div>

              <div className="valor-inicial w-100 d-flex flex-column justify-content-center text-align-center align-items-center mb-3">
                <h6>Valor Inicial De La Puja:</h6>
                <input
                  type="number"
                  className="mx-2 my-2 w-50 input-valor"
                  placeholder="ingrese el valor inicial"
                  onChange={handleChange}
                  name="pujaMinima"
                  id="pujaMinima"
                />
                <button className="subastar" type="submit">Subastar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Buscador.css'; 

const Buscador = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [animales, setAnimales] = useState([]);
  const [idUsuario, setIdUsuario] = useState("");
  const [idAnimal, setIdAnimal] = useState("");


  useEffect(() => {
    const storedIdUsuario = sessionStorage.getItem("idUsuario");
    if (storedIdUsuario) {
      setIdUsuario(storedIdUsuario);
    }
  }, []);

  const buscar = (query) => {
    if (!query.trim()) {
      setAnimales([]);
      return;
    }

    fetch(`http://localhost:8000/buscador/Buscar/${idUsuario}/${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.animal) {
          setAnimales(data.animal);

        } else {
          setAnimales([]);
        }
      })
      .catch((error) => {
        console.error("Error al buscar animales:", error);
        setAnimales([]);
      });
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      buscar(textoBusqueda);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [textoBusqueda]);

  const handleAnimalClick = (idAnimal, marca, raza) => {
    setTextoBusqueda("");
    setIdAnimal(idAnimal)
    setAnimales([]);
    localStorage.setItem('idAnimal', idAnimal)
    localStorage.setItem('marcaAnimal', marca)
    localStorage.setItem('razaAnimal', raza)
  };

  return (
    <div style={{ position: "relative", width: "290px" }}>
      <div
        className="input-group rounded-pill"
        id="buscador"
        style={{
          backgroundColor: "#E5E4E270",
          height: "32px",
          width: "100%",
        }}
      >
        <input
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          className="form-control border-0 rounded-pill shadow-none bg-transparent"
          style={{ padding: "0 0 0 20px", margin: 0, height: "100%" }}
          type="text"
          placeholder="Buscar animal..."
        />
        <div
          className="input-group-text bg-transparent border-0 pointer-click"
          role="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#237E0D"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>

      {animales.length > 0 && (
        <div className="resultados-busqueda">
          {animales.map((animal) => (
            <Link
              key={animal.idAnimal}
              to={`/crud-animal/${animal.idAnimal}`}
              
              className="resultado-item-link"
              onClick={() => handleAnimalClick(animal.idAnimal, animal.marca, animal.raza)}
              >
              <div className="resultado-item">
                <h5>{animal.raza} - {animal.marca}</h5>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buscador;

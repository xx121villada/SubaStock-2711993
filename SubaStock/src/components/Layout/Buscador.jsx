import { useState, useEffect } from "react";

const Buscador = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [animales, setAnimales] = useState([]);
  const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        const storedIdUsuario = sessionStorage.getItem('idUsuario');
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        }
    }, []);
  

  const buscar = (query) => {
    // Si no hay texto de búsqueda, no hacemos la consulta
    if (!query.trim()) {
      setAnimales([]);
      return;
    }

    // Aquí realizamos la llamada al servidor para obtener los animales del usuario
    fetch(`http://localhost:8000/buscador/Buscar.php/${idUsuario}/${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.animal) {
          setAnimales(data.animal);
        } else {
          setAnimales([]); // No se encontraron resultados
        }
      })
      .catch((error) => {
        console.error("Error al buscar animales:", error);
        setAnimales([]); // En caso de error, vaciamos los resultados
      });
  };

  // Efecto que se activa cada vez que cambia el texto de búsqueda
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      buscar(textoBusqueda);
    }, 300); // Delay de 300ms para evitar búsquedas excesivas

    return () => clearTimeout(delayDebounceFn);
  }, [textoBusqueda]);

  return (
    <div>
      <div
        className="input-group rounded-pill"
        id="buscador"
        style={{
          backgroundColor: "#E5E4E270",
          height: "32px",
          width: 290,
        }}
      >
        <input
          onChange={(e) => setTextoBusqueda(e.target.value)}
          className="form-control border-0 rounded-pill shadow-none bg-transparent"
          style={{ padding: "0 0 0 20px", margin: 0, height: "100%" }}
          type="text"
          placeholder="Buscar animal..."
        />
        <div className="input-group-text bg-transparent border-0 pointer-click" role="button">
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

      {/* Mostrar los resultados */}
      {animales.length > 0 && (
        <div className="resultados-busqueda">
          {animales.map((animal) => (
            <div key={animal.idAnimal}>
              <h5>{animal.raza} - {animal.marca}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buscador;

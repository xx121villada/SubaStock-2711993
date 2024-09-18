import { useState } from "react";

const Buscador = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const buscar = () => {};

  return (
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            buscar(textoBusqueda);
          }
        }}
        className="form-control border-0 rounded-pill shadow-none bg-transparent"
        onChange={(e) => setTextoBusqueda(e.target.value)}
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
  );
};

export default Buscador;

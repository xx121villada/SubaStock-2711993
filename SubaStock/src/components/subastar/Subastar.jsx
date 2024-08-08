import "./subastar.css"

export function Subastar() {
  
  return (
    <div className="body container-md p-2 d-flex flex-column align-items-center bg-white">
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className="back-button ms-2">
          <i className="bi bi-arrow-bar-left"></i> Regresar
        </button>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        
        <div className="content-agregar-imagen">
          <h6>Agregar Imagenes</h6>
          <img src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png" alt="agregar imagen" className="agregar-img"/>
        </div>

        <div className="d-flex flex-column d-md-flex-row info">
          <div className="d-flex flex-row flex-md-row align-items-center justify-content-center mb-3 content-titulo">
            <input type="text" className="titulo mt-4" placeholder="Ingrese El Titulo"></input>
          </div>
          <h6 className="tiempoRestante mb-2 fs-3">Fechas Limites</h6>
          <div className="fechas mb-3 text-center d-flex flex-column">
            <h6 className="my-3 ">Fecha Inicio:</h6>
            <input className="d-block mx-1 my-1" type="date" ></input>
            <h6 className="my-3">Fecha Cierre:</h6>
            <input className="d-block mx-1 my-1" type="date"></input>
          </div>
          <div className="d-flex flex-column my-2 text-center">
          <h6 className="mb-3">Descripcion:</h6>
          <input  className="descripcion mb-3" placeholder="Ingrese Descripcion"></input>
          </div>
          
          <div className="valor-inicial w-100 d-flex flex-column justify-content-center text-align-center align-items-center mb-3">
            <h6>Valor Inicial De La Puja:</h6>
            <input
              type="number"
              className="mx-2 my-2 w-50 input-valor"
              placeholder="ingrese el valor inicial"
            />
            <button className="subastar">Subastar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

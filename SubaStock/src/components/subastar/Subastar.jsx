import styles from "./subastar.module.css";

export function Subastar() {
  return (
    <div className={`container-md p-2 d-flex flex-column align-items-center bg-white ${styles.body}`}>
      <div className="w-100 d-flex justify-content-start align-items-center mb-3">
        <button className={`ms-2 ${styles.backButton}`}>
          <i className="bi bi-arrow-bar-left"></i> Regresar
        </button>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className={styles.contentAgregarImagen}>
          <h6 className={`${styles.tituloAgregar}`}>Agregar Imagenes</h6>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png"
            alt="agregar imagen"
            className={styles.agregarImg}
          />
        </div>

        <div className={`d-flex flex-column d-md-flex-row ${styles.info}`}>
          <div className={`d-flex flex-row flex-md-row align-items-center justify-content-center mb-3 ${styles.contentTitulo}`}>
            <input type="text" className={`mt-4 ${styles.titulo}`} placeholder="Ingrese El Titulo" />
          </div>
          <h6 className={`mb-2 fs-3 ${styles.tiempoRestante}`}>Fechas Limites</h6>
          <div className={`mb-3 text-center d-flex flex-column ${styles.fechas}`}>
            <h6 className="my-3">Fecha Inicio:</h6>
            <input className="d-block mx-1 my-1" type="date" />
            <h6 className="my-3">Fecha Cierre:</h6>
            <input className="d-block mx-1 my-1" type="date" />
          </div>
          <div className="d-flex flex-column my-2 text-center">
            <h6 className="mb-3">Descripcion:</h6>
            <input className={`mb-3 ${styles.descripcion}`} placeholder="Ingrese Descripcion" />
          </div>

          <div className={`w-100 d-flex flex-column justify-content-center text-align-center align-items-center mb-3 ${styles.valorInicial}`}>
            <h6>Valor Inicial De La Puja:</h6>
            <input
              type="number"
              className="mx-2 my-2 w-50"
              placeholder="Ingrese el valor inicial"
            />
            <button className={styles.subastar}>Subastar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

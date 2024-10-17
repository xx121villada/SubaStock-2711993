import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

export function TablaHistorial({ idAnimal }) {
  const [pujas, setPujas] = useState([]);

  useEffect(() => {
    const obtenerHistorialPujas = async () => {
      try {
        const response = await fetch(`https://apisubastock.cleverapps.io/subasta/PujasPorAnimal/${idAnimal}`);
        const data = await response.json();

        if (data.status) {
          setPujas(data.pujas);  // Guardamos las pujas en el estado
        } else {
          Swal.fire({
            text: data.message,
            icon: "info",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        Swal.fire({
          text: "Error al obtener el historial de pujas.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    if (idAnimal) {
      obtenerHistorialPujas();
    }
  }, [idAnimal]);

  return (
    <div className="container-md my-2 mx-3 p-2 d-md-flex flex-column align-items-center historial">
      <div
        className="d-flex flex-column flex-md-row align-items-center m-1 p-1 justify-content-center"
        id="titulo"
      >
        <h3 className="mb-2 mb-md-0 me-md-2">Historial De Pujas</h3>
      </div>
      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {pujas.length > 0 ? (
              pujas.map((puja, index) => (
                <tr key={index}>
                  <th scope="row">{`${puja.nombres.charAt(0)}***${puja.apellidos.charAt(0)}`}</th>
                  <td>{parseFloat(puja.valor).toLocaleString('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                    minimumFractionDigits: 0,
                  })}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No se encontraron pujas.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

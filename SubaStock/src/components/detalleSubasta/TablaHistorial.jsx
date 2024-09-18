
export function TablaHistorial() {
  return (
    <div
      className= "container-md my-2 mx-3 p-2 d-md-flex flex-column align-items-center historial"
    >
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
            <tr>
              <th scope="row">J***n</th>
              <td>2.200.000</td>
            </tr>
            <tr>
              <th scope="row">K***a</th>
              <td>2.100.000</td>
            </tr>
            <tr>
              <th scope="row">L*****s</th>
              <td>1.900.000</td>
            </tr>
            <tr>
              <th scope="row">J***n</th>
              <td>2.200.000</td>
            </tr>
            <tr>
              <th scope="row">K***a</th>
              <td>2.100.000</td>
            </tr>
            <tr>
              <th scope="row">L*****s</th>
              <td>1.900.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

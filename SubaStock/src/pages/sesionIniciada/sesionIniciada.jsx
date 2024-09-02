import { Link } from 'react-router-dom';
import '../sesionIniciada/sesionIniciada.css';
import Swal from 'sweetalert2';


function SesionIniciada() {
  const Cerrar = () => {
    Swal.fire({
      title: '¿Estás seguro de cerrar sesión?',
      text: "Esta acción no se puede deshacer",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesión'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Sesión cerrada',
          'Tu sesión ha sido finalizada',
          'success'
        );
        localStorage.removeItem('idAnimal');
        localStorage.removeItem('idUsuario');

        window.location.hash = '/';
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <span className="icon">🐷</span>
          <h1>BIENVENIDO A</h1>
          <h1>AGROSTOCK</h1>
          <span className="icon">🐮</span>
        </div>
        <div className="chicken-icon">
          <span className="icon">🐔</span>
        </div>
      </header>
      <main className="App-main">
        <div className="button-container">
          <Link to='/Subastar'>
            <button className="button">SUBASTAR</button>
          </Link>
          <button className="button">VER SUBASTAS</button>
          <button className="button">FAVORITOS</button>
          <Link to='/registro-animales'>
            <button className="button">REGISTRAR ANIMAL</button>
          </Link>
          <Link to='/ver-animales'>
            <button className="button">VER ANIMALES</button>
          </Link>
          <button className="button" onClick={Cerrar}>CERRAR SESION</button>
        </div>
      </main>
    </div>
  );
}

export default SesionIniciada;

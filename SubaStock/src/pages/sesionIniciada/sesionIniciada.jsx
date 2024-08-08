import { Link } from 'react-router-dom';
import '../sesionIniciada/sesionIniciada.css';


function SesionIniciada() {
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
          <Link to='/detalle-animales'>
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
          <Link to={'/'}>
          <button className="button">CERRAR SESION</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default SesionIniciada;

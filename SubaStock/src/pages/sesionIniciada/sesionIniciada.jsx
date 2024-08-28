import { Link } from 'react-router-dom';
import '../sesionIniciada/sesionIniciada.css';
import img_principal from '../sesionIniciada/img/img_principalR.png';


function SesionIniciada() {
  return (
    <div className="sesion-container">
      <header className="App-header">
        <h1 className="centered-title">BIENVENIDO A AGROSTOCK</h1>
      </header>
      <div className="content-container">
        <div className="image-container">
          <img src={img_principal} alt="Imagen descriptiva" className="left-image" />
        </div>
        <div className="menu-container">
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
              <Link to={'/'}>
                <button className="button">CERRAR SESION</button>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default SesionIniciada;

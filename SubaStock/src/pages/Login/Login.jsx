import React from 'react';
import './login.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className='titulo-login'>INICIO SESION</h1>
          <div className="logos-container">
                <img src="/src/pages/CRUD-xime/img/1.png" alt="Icono" />
                <img src="/src/pages/CRUD-xime/img/2.png" alt="Icono" />
                <img src="/src/pages/CRUD-xime/img/3.png" alt="Icono" />
          </div>
        <p className='nombre-input'>CORREO </p>
        <input type="text" placeholder="Ingrese su correo" className="input-field" />
        <p className='nombre-input'>CONTRASEÑA </p>
        <input type="text" placeholder="Ingrese su contraseña" className="input-field" />
        <button className="google-login-button">
          Iniciar sesión con Google
          <img src="/SubaStock/src/pages/Login/img/google.png" alt="Logo de Google" />
        </button>
        <Link to="/sesion-iniciada">
        <button type="submit" className="btn-login">INICIAR SESION</button>
        </Link>
        <Link to="/registro">
        <p className='registrarse'> No tienes una cuenta? Registrate</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;

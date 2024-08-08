import React from 'react';
import './login.css'; // Importa el archivo de estilos CSS

const Login = () => {
  const handleGoogleLogin = () => {
    // Aquí puedes añadir la lógica para el inicio de sesión con Google
  };

  return (
    <div className="body">
      <div className="login">
        <h2>INICIO SESION</h2>
      </div>
      <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
        <div className="container">
          <div className="form-wrap max-width-600 mx-auto">
            <form>
              <div className="form-group row">
                <label htmlFor="email">Correo electrónico:</label>
                <div className="col-sm-10">
                  <input type="email" id="email" name="email" required placeholder='Ingrese su correo'/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password">Contraseña:</label>
                <div className="col-sm-10">
                  <input type="password" id="password" name="password" required placeholder='Ingrese su contraseña'/>
                </div>
              </div>
              <button type="submit" className="login-button">
                INGRESAR
              </button>
            </form>
            <button className="google-button" onClick={handleGoogleLogin}>
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

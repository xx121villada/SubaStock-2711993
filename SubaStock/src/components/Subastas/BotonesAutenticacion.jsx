import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BotonesAutenticacion = ({
  registrarseClassName,
  iniciarSesionClassName,
  className = "",
}) => {
  return (
    <>
      <Link to='/registro'>
        <button className={className + " " + registrarseClassName}>
          Registrarse
        </button>
      </Link>

      <Link to='login'>
        <button className={className + " " + iniciarSesionClassName}>
          Iniciar Sesion
        </button>
      </Link>

    </>
  );
};

export default BotonesAutenticacion;

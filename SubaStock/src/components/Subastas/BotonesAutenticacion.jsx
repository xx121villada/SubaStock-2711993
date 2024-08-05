/* eslint-disable react/prop-types */
const BotonesAutenticacion = ({
  registrarseClassName,
  iniciarSesionClassName,
  className = "",
}) => {
  return (
    <>
      <button className={className + " " + registrarseClassName}>
        Registrarse
      </button>
      <button className={className + " " + iniciarSesionClassName}>
        Iniciar Sesion
      </button>
    </>
  );
};

export default BotonesAutenticacion;

/* eslint-disable react/prop-types */

const Tarjeta = ({ img, nombre, pujaMasAlta }) => {
  return (
    <div className="d-flex flex-column" style={{ width: 250, height: 400 }}>
      <img src={img} alt={nombre} className="w-full h-auto object-contain" />
      <div className="info-tarjeta p-2 d-flex flex-column gap-1 flex-grow">
        <p>{nombre}</p>
        <p>{pujaMasAlta}</p>
      </div>
    </div>
  );
};

export default Tarjeta;

import { useEffect, useState } from "react";
import Tarjeta from "../../components/Subastas/Tarjeta";

const animals = [];

const Subastas = () => {
  // const data = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://apisubastock.cleverapps.io/subasta/Obtener")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const subastas = data.subastas || [];

  if (subastas.length === 0) {
    return null;
  }

  return (
    <div
      className="container-lg"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 20,

        padding:
          "calc(var(--header-height) + 30px + 16px) 20px calc(var(--footer-height) + 30px + 16px) 20px",
        minHeight: "100svh",
        boxSizing: "border-box",
        marginTop: 100,
      }}
    >
      {subastas.map((subasta) => (
        <Tarjeta {...subasta} key={subasta.pujaMinima} />
      ))}
    </div>
  );
};

export default Subastas;

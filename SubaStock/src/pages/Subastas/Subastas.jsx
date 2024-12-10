import { useEffect, useState } from "react";
import Tarjeta from "../../components/Subastas/Tarjeta";
import { useLocation } from "react-router-dom";

const Subastas = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [prevUrl, setPrevUrl] = useState(null);

  function buscarSubastas() {
    const targetUrl =
      import.meta.env.VITE_API_URL + "/subasta/Obtener" + location.search;

    if (prevUrl === targetUrl) return;

    !loading && setLoading(true);
    fetch(targetUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
        setPrevUrl(targetUrl);
      });
  }

  useEffect(() => {
    buscarSubastas();
  }, [location]);

  const subastas = data.subastas || [];

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - var(--header-height))",
          background: "rgba(255, 255, 255, 0.8)",
          position: "fixed",
          width: "100%",
          top: "0",
        }}
      >
        <style>
          {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
        ;
        <div
          style={{
            border: "8px solid rgba(0, 0, 0, 0.1)",
            borderLeftColor: "var(--primary-color)",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            animation: "spin 1s linear infinite",
          }}
        ></div>
      </div>
    );
  }

  if (!loading && subastas.length === 0) {
    return (
      <div
        style={{
          height: "calc(100vh - var(--header-height))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="fs-2">No se encontraron subastas...</span>
      </div>
    );
  }

  return (
    <div
      className="container-lg"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 20,

        padding:
          "calc(var(--header-height) + 30px + 16px) 20px calc(var(--footer-height) + 30px + 16px) 20px",
        minHeight: "100svh",
        boxSizing: "border-box",
        marginTop: 100,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {subastas.map((subasta) => (
        <Tarjeta {...subasta} key={subasta.idSubasta} />
      ))}
    </div>
  );
};

export default Subastas;

import Buscador from "../../components/Subastas/Buscador";
import Tarjeta from "../../components/Subastas/Tarjeta";
import BotonesAutenticacion from "../../components/Subastas/BotonesAutenticacion";
import "./Subastas.css";

const animals = [];

for (let i = 0; i < 40; i++) {
  animals.push({
    fechaFin: "2024-12-31 15:13:30",
    pujaMasAlta: Math.floor(Math.random() * 18000000) + 1300000,
    numeroPujas: Math.floor(Math.random() * 39) + 1,
    titulo: "Toro Cebú",
    ubicacion: "Pereira",
  });
}
const Subastas = () => {
  return (
    <div id="main-subastas">
      <header
        className="d-flex flex-column justify-content-center align-items-center justify-content-md-around flex-md-row py-3 mt-md-0 p-md-2 position-fixed top-0 w-100 z-2 container-fluid"
        style={{
          backgroundColor: "var(--bg-color)",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}
      >
        <h4 className="d-none d-md-flex my-auto">SubaStock</h4>
        <Buscador />
        <div id="botones-auth" className="d-none d-md-flex gap-3 flex-nowrap">
          <BotonesAutenticacion
            registrarseClassName="d-none d-lg-block"
            className="rounded-pill boton-autenticacion"
          />
        </div>
      </header>
      <main
        className="d-flex gap-3 flex-wrap justify-content-center container-lg"
        style={{
          padding:
            "calc(var(--header-height) + 30px + 16px) 20px calc(var(--footer-height) + 30px + 16px) 20px",
          minHeight: "100svh",

          boxSizing: "border-box",
        }}
      >
        {animals.map((animal) => (
          <Tarjeta {...animal} key={animal.pujaMasAlta} />
        ))}
      </main>
      <footer
        className="position-fixed bottom-0 w-100 d-flex justify-content-center gap-4 z-2"
        style={{
          height: "var(--footer-height)",
        }}
      >
        <BotonesAutenticacion className="boton-autenticacion" />
      </footer>
    </div>
  );
};

export default Subastas;

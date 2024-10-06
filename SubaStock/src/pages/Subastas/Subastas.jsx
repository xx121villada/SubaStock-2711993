import Tarjeta from "../../components/Subastas/Tarjeta";

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
    <div
      className="d-flex gap-3 flex-wrap justify-content-center container-lg"
      style={{
        padding:
          "calc(var(--header-height) + 30px + 16px) 20px calc(var(--footer-height) + 30px + 16px) 20px",
        minHeight: "100svh",
        boxSizing: "border-box",
        marginTop: 100,
      }}
    >
      {animals.map((animal) => (
        <Tarjeta {...animal} key={animal.pujaMasAlta} />
      ))}
    </div>
  );
};

export default Subastas;

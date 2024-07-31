import Buscador from "./components/Buscador";
import Tarjeta from "./components/Tarjeta";
import "./Subastas.css";

const animals = [];
const images = [
  {
    nombre: "Vaca",
    image:
      "https://images.fineartamerica.com/images-medium-large-5/look-into-my-eyes-jersey-cow-square-gill-billington.jpg",
  },
  {
    nombre: "Perro",
    image:
      "https://images.squarespace-cdn.com/content/v1/51c30e7ce4b089f545ce58b3/1372097481530-PTVEWDS947B6KPROUGY4/Beagle1.jpg",
  },
  {
    nombre: "Gato",
    image:
      "https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg",
  },
];

for (let i = 0; i < 40; i++) {
  const randomImage = images[i % images.length];
  animals.push({
    nombre: randomImage.nombre,
    pujaMasAlta: Math.floor(Math.random() * 7203940) + 1,
    image: randomImage.image,
  });
}

const Subastas = () => {
  return (
    <div id="main-subastas">
      <header
        className="d-flex flex-column justify-content-center align-items-center justify-content-md-around flex-md-row pt-3 mt-md-0 p-md-3 position-fixed top-0 w-100 z-2"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <h3>SubaStock</h3>
        <Buscador />
      </header>
      <main
        className="position-relative"
        style={{
          padding:
            "calc(var(--header-height) + 15px) 20px calc(var(--footer-height) + 15px) 20px",
          minHeight: "100svh",
        }}
      >
        {animals.map(({ nombre, pujaMasAlta, image }) => (
          <Tarjeta
            img={image}
            nombre={nombre}
            pujaMasAlta={pujaMasAlta}
            key={nombre + "-" + pujaMasAlta}
          />
        ))}
      </main>
      <footer
        className="position-fixed bottom-0 w-100 d-flex justify-content-center gap-4 z-2"
        style={{
          height: "var(--footer-height)",
          backgroundColor: "var(--bg-color)",
        }}
      >
        <button>Registrarse</button>
        <button>Iniciar Sesion</button>
      </footer>
    </div>
  );
};

export default Subastas;

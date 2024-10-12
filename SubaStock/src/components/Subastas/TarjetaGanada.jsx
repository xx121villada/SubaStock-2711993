import LazyCarousel from "./LazyCarousel";
import './TarjetaGanada.css'

// eslint-disable-next-line react/prop-types
const TarjetaGanada = ({ titulo = "", imgs = ["https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg"]}) => {
    return (
        <div className="d-flex flex-column" id="tarjeta-ganada" >
            <LazyCarousel
                imgs = { imgs }
            />
            <div className="p-3 d-flex flex-column gap-2">
                <span className="fs-4 text-bold text-center">{titulo}</span>
                <h3 className="text-green text-center my-4">¡Haz ganado la subasta!</h3>
                <a href="https://wa.me/+573106326454?text=Hola!" target="_blank" className="text-decoration-none d-flex border-0 align-items-center rounded-3 justify-content-evenly py-2 btn-whatsapp">
                    <img src="whatsapp_icon.png" alt="Whatsapp Icon" className="icon-whatsapp"/>
                    <span className="text-white text-button">Contactar al Whatsapp</span>
                </a>
            </div>
        </div>
    );
};

export default TarjetaGanada;

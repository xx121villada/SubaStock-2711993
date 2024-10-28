import LazyCarousel from "../../components/Subastas/LazyCarousel";
import styles from '../TarjetaGanadora/TarjetaGanada.module.css'

// eslint-disable-next-line react/prop-types
const TarjetaGanada = ({ titulo = "", imgs = ["https://wintechnology.co/wp-content/uploads/2021/11/imagen-no-disponible.jpg"] }) => {
    return (
        <div className={styles.container}>
            <div className={`d-flex flex-column ${styles.tarjetaGanada}` } >
                <LazyCarousel className={styles.carruselImg}
                    imgs={imgs}
                />
                <div className={`p-3 d-flex flex-column gap-2`}>
                    <span className={`fs-4 text-bold text-center`}>{titulo}</span>
                    <h1 className={`${styles.texto} text-center my-4`}>¡HAZ GANADO LA SUBASTA!</h1>
                    <a href="https://wa.me/+573106326454?text=Hola, he ganado la subasta, podrías contactarte conmigo." target="_blank" className={`text-decoration-none d-flex border-0 align-items-center rounded-3 justify-content-evenly py-2 ${styles.btnWhatsapp}`}>
                        <img src="whatsapp_icon.png" alt="Whatsapp Icon" className={styles.iconWhatsapp} />
                        <span className={`text-white ${styles.textButton}`}>Contactar al Whatsapp</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TarjetaGanada;

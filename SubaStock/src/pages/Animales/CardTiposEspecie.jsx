/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./styles/TipoAnimal.module.css";

export default function CardTiposEspecie({ tipoEspecie, imagen }) {
    const handleClick = () => {
        localStorage.setItem('especieAnimal', tipoEspecie.especie);
    };

    return (
        <div className={styles.cardContainer}>
            <img
                src={imagen}
                alt={tipoEspecie.especie}
                className={styles.cardImage}
            />
            <h5 className={styles.cardTitle}>{tipoEspecie.especie}</h5>
            <Link to={`/visualizar/${tipoEspecie.especie.toLowerCase()}`} onClick={handleClick}>
                <button className={styles.cardButton}>Visualizar</button>
            </Link>
        </div>
    );
}

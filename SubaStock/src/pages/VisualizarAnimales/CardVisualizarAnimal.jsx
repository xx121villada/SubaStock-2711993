/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./styles/VisualizarAnimales.module.css"

export default function CardVisualizarAnimal({ visualizarAnimal, imagen }) {

    const handleVisualizarClick = () => {
        localStorage.setItem('marcaAnimal', visualizarAnimal.marca);
        localStorage.setItem('idAnimal', visualizarAnimal.idAnimal);
        localStorage.setItem('razaAnimal', visualizarAnimal.raza);
    };

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.imgContainerTipo}>
                <img
                    className={styles.cardImage}
                    src={imagen}
                    alt={visualizarAnimal.raza}
                />
            </div>
            <div className={styles.contentTipo} >
                <h5 className={styles.cardName}>raza : {visualizarAnimal.raza}</h5>
                <h6>Marca: {visualizarAnimal.marca}</h6>
                <Link
                    to={`/crud-animal/${visualizarAnimal.idAnimal}`}
                    onClick={handleVisualizarClick}
                >
                    <button className={styles.btnVisualizar}>Visualizar</button>
                </Link>
            </div>
        </div>
    );
}

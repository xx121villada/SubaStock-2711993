/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import '../Animales/styles/TipoAnimal.css';

export default function CardVisualizarAnimal({ visualizarAnimal, imagen }) {

    const handleVisualizarClick = () => {
        localStorage.setItem('marcaAnimal', visualizarAnimal.marca);
        localStorage.setItem('idAnimal', visualizarAnimal.idAnimal);
        localStorage.setItem('razaAnimal', visualizarAnimal.raza);
    };

    return (
        <div className="cardTipoAnimal">
            <div className="img-container-Tipo">
                <img
                    className="img-tipo"
                    src={imagen}
                    alt={visualizarAnimal.raza}
                />
            </div>
            <div className="content-Tipo">
                <h5 className="card-name">raza : {visualizarAnimal.raza}</h5>
                <h6>Marca: {visualizarAnimal.marca}</h6>
                <Link 
                    to={`/crud-animal/${visualizarAnimal.idAnimal}`}
                    onClick={handleVisualizarClick}
                >
                    <button className='btn-visualizar'>Visualizar</button>
                </Link>
            </div>
        </div>
    );
}

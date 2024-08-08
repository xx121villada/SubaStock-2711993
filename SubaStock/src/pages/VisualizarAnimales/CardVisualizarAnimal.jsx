/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import '../Animales/styles/TipoAnimal.css';

export default function CardVisualizarAnimal({ visualizarAnimal,  }) {
    return (
        <div className="cardTipoAnimal">
            <div className="img-container-Tipo">
                <img
                    className="img-tipo"
                    src={visualizarAnimal.img}
                    alt={visualizarAnimal.name}
                />
            </div>
            <div className="content-Tipo">
                <h5 className="card-name">{visualizarAnimal.name}</h5>
                <Link to='/crud-animal'>
                    <button className='btn-visualizar'>Visualizar</button>
                </Link>
            </div>
        </div>
    );
}

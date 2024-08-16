/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './styles/TipoAnimal.css';

export default function CardTiposEspecie({ tipoEspecie, imagen }) {
    return (
        <div className="cardTipoAnimal">
            <div className="img-container-Tipo">
                <img
                    className="img-tipo"
                    src={imagen}
                    alt={tipoEspecie.especie}
                />
            </div>
            <div className="content-Tipo">
                <h5 className="card-name">{tipoEspecie.especie}</h5>
                <Link to={`/visualizar/${tipoEspecie.especie.toLowerCase()}`}>
                    <button className='btn-visualizar'>Visualizar</button>
                </Link>
            </div>
        </div>
    );
}

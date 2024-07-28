/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './styles/TipoAnimal.css';

export default function CardTiposEspecie({ tipoEspecie }) {
    return (
        <div className="cardTipoAnimal">
            <div className="img-container-Tipo">
                <img
                    className="img-tipo"
                    src={tipoEspecie.img}
                    alt={tipoEspecie.name}
                />
            </div>
            <div className="content-Tipo">
                <h5 className="card-name">{tipoEspecie.name}</h5>
                <Link to={`/visualizar/${tipoEspecie.name.toLowerCase()}`}>
                    <button className='btn-visualizar'>Visualizar</button>
                </Link>
            </div>
        </div>
    );
}

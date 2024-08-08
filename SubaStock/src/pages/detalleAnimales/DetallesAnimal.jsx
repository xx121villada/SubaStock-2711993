import Buscador from '../../components/Subastas/Buscador';
import { Link } from 'react-router-dom';
import './styles/CardAnimal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CardList from './CardList';

export default function DetallesAnimal() {
    return (
        <div className='bg-light'>
            <div className="back-container p-2">
                <Link to='/' className="back-link">
                    <i className="link-back bi bi-caret-left-fill fw-semibold">Regresar</i>
                </Link>
            </div>
            <div className="buscador-container">
                <Buscador />
            </div>
            <div className='container-Card'>
                <CardList />
            </div>

        </div>
    )
}

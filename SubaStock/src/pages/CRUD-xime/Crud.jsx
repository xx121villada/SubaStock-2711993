import './Crud.css';
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import HistorialAliemto from '../Historiales/HistorialAliemto';
import HistorialVacunacion from '../Historiales/HistorialVacunacion';
import HistorialPesoSalud from '../Historiales/HistorialPesoSalud';


function Crud() {
    const navigate = useNavigate();
    const [showAlimentacion, setShowAlimentacion] = useState(false);
    const [showVacunacion, setShowVacunacion] = useState(false);
    const [showPesoSalud, setShowPesoSalud] = useState(false);
    const [marca, setMarca] = useState('');
    const [idAnimal, setIdAnimal] = useState('');

    const toggleAlimentacion = () => {
        setShowAlimentacion(!showAlimentacion);
    };
    const toggleVacunacion = () => {
        setShowVacunacion(!showVacunacion);
    };
    const togglePesoSalud = () => {
        setShowPesoSalud(!showPesoSalud);
    };


    useEffect(() => {
        const storedMarca = localStorage.getItem('marcaAnimal');
        const storedIdAnimal = localStorage.getItem('idAnimal');
        if (storedMarca) {
            setMarca(storedMarca);
        }
        if (storedIdAnimal) {
            setIdAnimal(storedIdAnimal);
        }
    }, []);

    const selectAccion = ()=>{
        localStorage.setItem('idAnimal',idAnimal);
        localStorage.setItem('marcaAnimal', marca);
    }

    const insertar = (event) => {
        const selectedValue = event.target.value;
        switch (selectedValue) {
            case "1":
                navigate('/insertar-alimentos');
                break;
            case "2":
                navigate('/insertar-medicamentos');
                break;
            case "3":
                navigate('/insertar-peso-salud');
                break;
            default:
                break;
        }
    };
    return (
        <div className="auction-app">
            <div className="cow-icons">
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" />
                <p>Marca del Animal: {marca ? marca : "No disponible"}</p>
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" />
            </div>
            <div className='body'>
                <div className="contenido">
                    <div className="botones">
                        <div className="btn">INICIO</div>
                        <div className='Insertar'>
                            <label htmlFor="">Insertar</label>
                            <select name="Insertar" id=""
                            onChange={insertar}
                            onClick={selectAccion}
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="1">Insertar Alimentación</option>
                                <option value="2">Insertar Medicamentos</option>
                                <option value="3">Insertar Peso y Salud</option>
                            </select>
                        </div>
                        <div className="btn">
                        <div className='Insertar'>
                            <label htmlFor="">Eliminar</label>
                        </div>
                        </div>
                    </div>
                    <div className="tabla">
                        <p className='raza'>Vaca de raza Brahman</p>
                        <div className="menu">
                            <button onClick={toggleVacunacion}>
                            {showVacunacion? 'Cerrar Vacunación' : 'Abrir Vacunación'}
                            </button>
                            {showVacunacion && <HistorialVacunacion/>}
    
                        </div>
                        <div className="menu">
                        <button onClick={toggleAlimentacion}>
                        {showAlimentacion ? 'Cerrar Alimentación' : 'Abrir Alimentación'}
                            </button>
                            {showAlimentacion && <HistorialAliemto/>}
                            </div>
                        <div className="menu">
                            <button onClick={togglePesoSalud}>
                            {showPesoSalud? 'Cerrar Peso y Salud' : 'Abrir Peso y Salud'}
                            </button>
                            {showPesoSalud && <HistorialPesoSalud/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crud;

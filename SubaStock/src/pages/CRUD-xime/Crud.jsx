import './Crud.css';
import { useNavigate } from 'react-router-dom';
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
    const [raza, setRaza] = useState('');

    useEffect(() => {
        const storedMarca = localStorage.getItem('marcaAnimal');
        if (storedMarca) {
            setMarca(storedMarca);
        }
        const storedRaza = localStorage.getItem('razaAnimal');
        if (storedRaza) {
            setRaza(storedRaza);
        }
    }, []);


    const toggleAlimentacion = () => setShowAlimentacion(!showAlimentacion);
    const toggleVacunacion = () => setShowVacunacion(!showVacunacion);
    const togglePesoSalud = () => setShowPesoSalud(!showPesoSalud);

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
        <div className="crud-app">
            <div className="header-crud">
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" className="header-icon" />
                <h1 className="header-title">Marca del Animal: {marca || "No disponible"}</h1>
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" className="header-icon" />
            </div>
            <div className="content">
                <div className="buttons-crud">
                    <button className="button-inicio-crud">INICIO</button>
                    <div className="dropdown">
                        <label>Insertar</label>
                        <select onChange={insertar}>
                            <option value="">Seleccione una opción</option>
                            <option value="1">Insertar Alimentación</option>
                            <option value="2">Insertar Medicamentos</option>
                            <option value="3">Insertar Peso y Salud</option>
                        </select>
                    </div>
                </div>
                <div className="table">
                    <h2 className="animal-breed">Vaca de raza {raza}</h2>
                    <div className="menu-crud">
                        <button onClick={toggleVacunacion} className="menu-crud-button">
                            {showVacunacion ? 'Cerrar Vacunación' : 'Abrir Vacunación'}
                        </button>
                        {showVacunacion && <HistorialVacunacion />}
                    </div>
                    <div className="menu-crud">
                        <button onClick={toggleAlimentacion} className="menu-crud-button">
                            {showAlimentacion ? 'Cerrar Alimentación' : 'Abrir Alimentación'}
                        </button>
                        {showAlimentacion && <HistorialAliemto />}
                    </div>
                    <div className="menu-crud">
                        <button onClick={togglePesoSalud} className="menu-crud-button">
                            {showPesoSalud ? 'Cerrar Peso y Salud' : 'Abrir Peso y Salud'}
                        </button>
                        {showPesoSalud && <HistorialPesoSalud />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crud;

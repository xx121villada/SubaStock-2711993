import './Crud.css';
import { useNavigate, Link } from 'react-router-dom';
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
    const [idAnimal, setIdAnimal] = useState();
    const [raza, setRaza] = useState('');
    const [btnActived, setBtnActived] = useState(false);

    useEffect(() => {
        const storedMarca = localStorage.getItem('marcaAnimal');
        if (storedMarca) setMarca(storedMarca);

        const storedRaza = localStorage.getItem('razaAnimal');
        if (storedRaza) setRaza(storedRaza);

        const storedIdAnimal = localStorage.getItem('idAnimal');
        if (storedIdAnimal) setIdAnimal(storedIdAnimal);
    }, []);

    useEffect(() => {
        const fetchAnimalData = async () => {
            if (!idAnimal) return; 

            try {
                const response = await fetch(`https://apisubastock.cleverapps.io/subasta/Obtener/${idAnimal}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const data = await response.json();
                console.log(data);
                if (data.status) {
                    setBtnActived(true);
                } else {
                    setBtnActived(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchAnimalData();
    }, [idAnimal]);

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
            <div className="d-flex justify-content-start align-items-center mb-3">
                <button className="back-button">
                    <Link to={'/sesion-iniciada'} className="text-decoration-none text-dark">
                        Regresar
                    </Link>
                </button>
            </div>
            <div className="header-crud">
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" className="header-icon" />
                <h1 className="header-title">Marca del Animal: {marca || "No disponible"}</h1>
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" className="header-icon" />
            </div>
            <div className="content">
                <div className="buttons-crud">
                    <Link to={`/subastar/${idAnimal}`}>
                        <button
                            className={`button-inicio-crud ${btnActived ? 'button-disabled' : 'button-enabled'}`}
                            disabled={btnActived}
                        >
                            {btnActived ? 'Animal ya subastado' : 'Iniciar Subasta'}
                        </button>

                    </Link>

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


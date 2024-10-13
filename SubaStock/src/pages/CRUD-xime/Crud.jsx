import styles from './styles/Crud.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HistorialAliemto from '../Historiales/HistorialAliemto';
import HistorialVacunacion from '../Historiales/HistorialVacunacion';
import HistorialPesoSalud from '../Historiales/HistorialPesoSalud';
import BotonVolver from '../../components/UI/BotonVolver';
import bovino from './img/2.png';
import porcino from './img/1.png';
import apino from './img/3.png';
import equino from './img/4.png';

function Crud() {
    
    const navigate = useNavigate();
    const [showAlimentacion, setShowAlimentacion] = useState(false);
    const [showVacunacion, setShowVacunacion] = useState(false);
    const [showPesoSalud, setShowPesoSalud] = useState(false);
    const [marca, setMarca] = useState('');
    const [idAnimal, setIdAnimal] = useState();
    const [raza, setRaza] = useState('');
    const [especie, setEspecie] = useState('');
    const [btnActived, setBtnActived] = useState(false);
    const [iconoEspecie, setIconoEspecie] = useState('');

    const EspeciesImg = {
        "Bovino": bovino,
        "Porcino": porcino,
        "Avicultura": apino,
        "Equino": equino,
    };

    useEffect(() => {
        const storedMarca = localStorage.getItem('marcaAnimal');
        const storedRaza = localStorage.getItem('razaAnimal');
        const storedEspecie = localStorage.getItem('especieAnimal');
        const storedIdAnimal = localStorage.getItem('idAnimal');

        if (storedMarca) setMarca(storedMarca);
        if (storedRaza) setRaza(storedRaza);
        if (storedEspecie) setEspecie(storedEspecie);
        if (storedIdAnimal) setIdAnimal(storedIdAnimal);

        setIconoEspecie(razaAnimal(storedEspecie)); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                setBtnActived(data.status);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchAnimalData();
    }, [idAnimal]);

    const razaAnimal = (especie) => {
        switch (especie) {
            case "Bovino":
                return EspeciesImg.Bovino;
            case "Porcino":
                return EspeciesImg.Porcino;
            case "Caprino":
                return EspeciesImg.Caprino;
                case "Equino":
                    return EspeciesImg.Equino;
            case "Avicultura":
                return EspeciesImg.Avicultura;
            default:
                return '';
        }
    }

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
        <div className={styles.crudApp}>
            <BotonVolver ruta={`/visualizar/${especie}`}/>

            <div className={styles.headerCrud}>
                {iconoEspecie && <img src={iconoEspecie} alt="Icono" className={styles.headerIcon} />}
                <h1 className={styles.headerTitle}>Marca del Animal: {marca || "No disponible"}</h1>
                {iconoEspecie && <img src={iconoEspecie} alt="Icono" className={styles.headerIcon} />}
            </div>
            <div className={styles.content}>
                <div className={styles.buttonsCrud}>
                    <Link to={`/subastar/${idAnimal}`}>
                        <button
                            className={`${styles.buttonInicioCrud} ${btnActived ? styles.buttonDisabled : styles.buttonEnabled}`}
                            disabled={btnActived}
                        >
                            {btnActived ? 'Animal ya subastado' : 'Iniciar Subasta'}
                        </button>
                    </Link>

                    <div className={styles.dropdown}>
                        <label>Insertar</label>
                        <select onChange={insertar}>
                            <option value="">Seleccione una opción</option>
                            <option value="1">Insertar Alimentación</option>
                            <option value="2">Insertar Medicamentos</option>
                            <option value="3">Insertar Peso y Salud</option>
                        </select>
                    </div>
                </div>
                <div className={styles.table}>
                    <h2 className={styles.animalBreed}>Animal de raza {raza}</h2>
                    <div className={styles.menuCrud}>
                        <button onClick={toggleVacunacion} className={styles.menuCrudButton}>
                            {showVacunacion ? 'Cerrar Vacunación' : 'Abrir Vacunación'}
                        </button>
                        {showVacunacion && <HistorialVacunacion />}
                    </div>
                    <div className={styles.menuCrud}>
                        <button onClick={toggleAlimentacion} className={styles.menuCrudButton}>
                            {showAlimentacion ? 'Cerrar Alimentación' : 'Abrir Alimentación'}
                        </button>
                        {showAlimentacion && <HistorialAliemto />}
                    </div>
                    <div className={styles.menuCrud}>
                        <button onClick={togglePesoSalud} className={styles.menuCrudButton}>
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

import './Crud.css';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Crud() {
    const navigate = useNavigate();
    const [marca, setMarca] = useState('');
    const [idAnimal, setIdAnimal] = useState('');

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
                navigate('/ruta-insertar-medicamentos');
                break;
            case "3":
                navigate('/ruta-insertar-peso-salud');
                break;
            default:
                break;
        }
    };

    const estaSeguro = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado',
                    'El elemento ha sido eliminado.',
                    'success'
                );
            }
        });
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
                        <div className="btn" onClick={estaSeguro}>ELIMINAR</div>
                    </div>
                    <div className="tabla">
                        <p className='raza'>Vaca de raza Brahman</p>
                        <div className="menu">
                            <button>
                                HISTORIAL DE PESO Y SALUD
                            </button>
                        </div>
                        <div className="menu">
                        <Link to={`/historial-alimento/${idAnimal}`}>
                        <button>
                                HISTORIAL DE ALIMENTOS
                            </button>
                            </Link>
                        </div>
                        <div className="menu">
                            <p>HISTORIAL DE MEDICAMENTOS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crud;

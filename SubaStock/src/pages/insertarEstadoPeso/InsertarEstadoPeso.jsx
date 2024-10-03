import { useState, useEffect } from 'react';
import './InsertarEstadoSaludPeso.css';
import bovino from '../Animales/img/Bovino.png';
import Swal from 'sweetalert2';

export default function InsertarEstadoPeso() {
    const [marca, setMarca] = useState('');
    const [idAnimal, setIdAnimal] = useState('');

    useEffect(() => {
        const storedMarca = localStorage.getItem('marcaAnimal');
        if (storedMarca) {
            setMarca(storedMarca);
        }
        const storedIdAnimal = localStorage.getItem('idAnimal');
        if (storedIdAnimal) {
            setIdAnimal(storedIdAnimal);
        }
    }, []);

    const [valores, setValores] = useState({
        peso: '',
        estado: ''
    });

    useEffect(() => {
        setValores((prevValores) => ({
            ...prevValores,
            idAnimal: idAnimal,
        }));
    }, [idAnimal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', valores);
        console.log('id', idAnimal);
        fetch('http://localhost:8000/estadoSalud/Insertar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(valores)
        })
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then((data) => {
                if (data.status) {
                    Swal.fire({ title: data.message, icon: 'success' });
                    setValores({
                        idAnimal: idAnimal,
                        peso: '',
                        estado: ''
                    });
                } else {
                    Swal.fire({ title: data.message, icon: 'error' });
                    setValores({
                        idAnimal: idAnimal,
                        peso: '',
                        estado: ''
                    });
                }
            })
            .catch(error => {
                console.error('Error al insertar alimento:', error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container-alimento'>
                    <div className="form-container-div">
                        <h1>INSERTAR INFORMACIÓN</h1>
                        <div className="cow-container-img">
                            <img src={bovino} alt="Imagen de vaca" className="cow-icon" />
                            <p>Marca del Animal: {marca ? marca : "No disponible"}</p>
                            <img src={bovino} alt="Imagen de vaca" className="cow-icon" />
                        </div>
                        <div className="input-container-alimento">
                            <label htmlFor="peso">Ingrese el peso del amimal:</label>
                            <input
                                type="text"
                                id="peso"
                                name="peso"
                                onChange={handleChange}
                                placeholder="Ingrese el peso del amimal"
                                required
                            />
                            <label htmlFor="estado">Estado:</label>
                            <select id="estado" name="estado" onChange={handleChange} required>
                                <option value="">Seleccione el estado de salud del animal</option>
                                <option value="Normal">Normal</option>
                                <option value="Desnutricion">Desnutrición</option>
                                <option value="Excelente">Excelente</option>
                                <option value="buena">Buena</option>
                                <option value="regular">Regular</option>
                                <option value="mala">Mala</option>
                                <option value="muy-mala">Muy mala</option>

                            </select>
                        </div>
                        <button className="submit-button" type='submit'>
                            INSERTAR PESO Y SALUD
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

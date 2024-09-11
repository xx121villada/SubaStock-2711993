import { useState, useEffect } from 'react';
import './insertarAlimentos.css';
import bovino from '../Animales/img/Bovino.png';
import Swal from 'sweetalert2';

function InsertarAlimento() {
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
        tipo_alimento: '',
        cantidad: ''
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
        fetch('http://localhost:8000/alimentacion/Insertar', {
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
                        tipo_alimento: '',
                        cantidad: ''
                    });
                } else {
                    Swal.fire({ title: data.message, icon: 'error' });
                    setValores({
                        idAnimal: idAnimal,
                        tipo_alimento: '',
                        cantidad: ''
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
                        <h1>Insertar Alimentos</h1>
                        <div className="cow-container-img">
                            <img src={bovino} alt="Imagen de vaca" className="cow-icon" />
                            <p>Marca del Animal: {marca ? marca : "No disponible"}</p>
                            <img src={bovino} alt="Imagen de vaca" className="cow-icon" />
                        </div>
                        <div className="input-container-alimento">
                            <label htmlFor="nombre">Nombre del Alimento:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="tipo_alimento"
                                onChange={handleChange}
                                placeholder="Ingrese el nombre del alimento"
                                required
                            />
                            <label htmlFor="cantidad">Cantidad:</label>
                            <select id="cantidad" name="cantidad" onChange={handleChange} required>
                                <option value="">Seleccione la cantidad de alimento</option>
                                <option value="1">1 kg</option>
                                <option value="2">2 kg</option>
                                <option value="3">3 kg</option>
                                <option value="4">4 kg</option>
                                <option value="5">5 kg</option>
                                <option value="6">6 kg</option>
                                <option value="7">7 kg</option>
                                <option value="8">8 kg</option>
                                <option value="9">9 kg</option>
                                <option value="10">10 kg</option>
                            </select>
                        </div>
                        <button className="submit-button" type='submit'>
                            Insertar Alimento
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default InsertarAlimento;

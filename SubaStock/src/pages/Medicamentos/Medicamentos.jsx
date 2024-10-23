import React from "react";
import './style.css';
import bovino from '../Animales/img/Bovino.png';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Informacion() {
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
        nombre: '',
        dosis: ''
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
        fetch('http://localhost:8000/medicamento/Insertar', {
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
                        nombre: '',
                        dosis: ''
                    });
                } else {
                    Swal.fire({ title: data.message, icon: 'error' });
                    setValores({
                        idAnimal: idAnimal,
                        nombre: '',
                        dosis: ''
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                });
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="containerMedicamento">
                    <div className="form-container-div">
                        <h3>INSERTAR MEDICAMENTOS</h3>
                        <div className="cow-container-img">
                            <img src={bovino} alt="Imagen de vaca" className="cow-icon" />
                            <p>MARCA DEL ANIMAL: {marca ? marca : "No disponible"}</p>
                            <img src={bovino} alt="Imagen de vaca" className="cow-icon" />
                        </div>
                        <div className="inputMedicamento">
                            <label>NOMBRE:</label>
                            <input type="text"
                                id='nombre'
                                name='nombre'
                                required
                                className="form-control"
                                placeholder="Ingrese el nombre del medicamento"
                                onChange={handleChange}
                            />

                            <label>DOSIS:</label>
                            <input type="number"
                                id='dosis'
                                name='dosis'
                                required
                                className="form-control"
                                placeholder="Ingrese la dosis aplicada"
                                onChange={handleChange}
                            />
                        </div>
                            <button type='submit' className='botonInsertar'> INSERTAR MEDICAMENTO</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
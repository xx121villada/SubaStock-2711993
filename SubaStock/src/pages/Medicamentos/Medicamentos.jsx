import React from "react";
import './styles/style.css';

import { PiCowDuotone } from "react-icons/pi";
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
        <div className='body'>
            <form onSubmit={handleSubmit}>
            <div className="login">
                <h3>INSERTAR MEDICAMENTOS</h3>
            </div>
            <div className="icon-container">
                <PiCowDuotone className="icon" /><h4> {marca} </h4><PiCowDuotone className="icon" />
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="form-wrap max-width-600 mx-auto">
                        <div className="form-group row">
                            <label>Nombre:</label>
                            <div className="col-sm-15">
                                <input type="text"
                                id='nombre'
                                name='nombre'
                                required
                                className="form-control"
                                placeholder="Ingrese el nombre del medicamento"
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Dosis:</label>
                            <div className="col-sm-10">
                                <input type="number"
                                id='dosis'
                                name='dosis'
                                required
                                className="form-control"
                                placeholder="Ingrese la dosis aplicada" 
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botonesMedicamento">
                <button type='submit' className='btn btn-success boton boton-insertar'> Insertar Medicamento</button>
            </div>
            </form>
        </div>
    );
}
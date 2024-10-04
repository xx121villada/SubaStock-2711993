import './registro.css';
import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Registro() {
    const validarCorreo = (email) => /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);
    const validarContraseña = (password) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const form = useRef();

    const [valores, setValores] = useState({
        nombres: '',
        apellidos: '',
        correo: '',
        contraseña: '',
        saldo: '0',
        telefono: '',
        repetirContraseña: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validations = [
            { campo: "nombres", min: 3, message: "El nombre debe contener mínimo 3 caracteres" },
            { campo: "apellidos", min: 3, message: "El apellido debe contener mínimo 3 caracteres" },
            { campo: "correo", validacion: validarCorreo, message: "Debe introducir una dirección de correo electrónico válida" },
            { campo: "telefono", min: 10, max: 10, message: "El teléfono debe ser de 10 números" },
            { campo: "contraseña", validacion: validarContraseña, message: "La contraseña no cumple con los requisitos mínimos" },
            { campo: "repetirContraseña", validacion: value => value !== "", message: "Este campo no puede quedar vacío" },
            { campo: "contraseña", validacion: (value) => value === valores.repetirContraseña, message: "Las contraseñas ingresadas no coinciden" }
        ];

        for (const { campo, min, max, validacion, message } of validations) {
            const value = valores[campo];
            if ((min && value.length < min) || (max && value.length > max) || (validacion && !validacion(value))) {
                Swal.fire({ title: message, icon: "error" });
                return;
            }
        }

        fetch('https://apisubastock.cleverapps.io/usuario/Insertar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(valores)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if(data.status){
                Swal.fire({ title: data.message, icon: 'success' });
                form.current.reset();
                setValores({ 
                    nombres: '',
                    apellidos: '',
                    correo: '',
                    contraseña: '',
                    saldo: '',
                    telefono: '',
                    repetirContraseña: ''
                });
                window.location.hash = "/login";
            } else {
                Swal.fire({ title: data.message, icon: 'error' });
            }
        })
        .catch((error) => {
            Swal.fire({ title: `Error al registrar: ${error.message}`, icon: 'error' });
        });
    };

    return (
        <div className='register-container'>
            <div className='content-register'>
            
            <form onSubmit={handleSubmit} ref={form} className='registro-form'>
                <section className='container-registro'>
                    <h1 className="titulo">Registro</h1>
                    <div className="form-row">
                        <div className="input-container">
                            <label>Nombres</label>
                            <input 
                                placeholder='Ingrese sus nombres'
                                type="text"
                                name='nombres'
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Apellidos</label>
                            <input 
                                placeholder='Ingrese sus apellidos'
                                type="text"
                                name='apellidos'
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-container">
                            <label>Teléfono</label>
                            <input 
                                placeholder='Ingrese su número de teléfono'
                                type="tel"
                                name='telefono'
                                pattern="[0-9]{10}"
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label>Correo electrónico</label>
                            <input 
                                placeholder='Ingrese su correo electrónico'
                                type="email"
                                name='correo'
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>
                        <div className="input-container">
                            <label>Contraseña</label>
                            <input 
                                placeholder='Crear contraseña'
                                type="password"
                                name='contraseña'
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    <div className="form-row">
                        <div className="input-container">
                            <label>Confirmar contraseña</label>
                            <input 
                                placeholder='Repita su contraseña'
                                type="password"
                                name='repetirContraseña'
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-success" type="submit">Registrarse</button>
                    </div>
                    <div className='m-3'>
                        <Link className='text-decoration-none text-black fs-5' to="/login"> 
                        <p className='text-login'>¿Ya tienes una cuenta? Inicia sesión</p>
                        </Link>
                    </div>
                </section>
            </form>
            </div>
        </div>
    );
}

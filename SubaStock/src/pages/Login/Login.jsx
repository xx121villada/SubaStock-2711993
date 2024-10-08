import './login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrige el nombre de 'boostrap' a 'bootstrap'
import SPLoader from '../loader/Loader'; // Importa tu componente SPLoader


const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, handleChange];
};

const iniciarSesion = async (values) => {
    try {
        const response = await fetch('https://apisubastock.cleverapps.io/usuario/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta');
        }

        const data = await response.json();

        if (data.status) {
            sessionStorage.setItem('idUsuario', data.idUsuario);
            Swal.fire({
                title: 'Correcto!',
                text: "Inicio de Sesión exitoso",
                icon: 'success',
                confirmButtonText: 'Continuar',
            }).then(() => {
                window.location.hash = '/sesion-iniciada';
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Continuar',
            });
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: `Error al iniciar sesión: ${error.message}`,
            icon: 'error',
        });
    }
};

const Login = () => {
    const [values, handleChange] = useForm({
        correo: '',
        contraseña: ''
    });

    const [loading, setLoading] = useState(true); // Estado para controlar la carga

    useEffect(() => {
        // Simula la carga de datos o inicialización
        const loadData = async () => {
            // Simula un delay, reemplázalo con tu lógica de carga real
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false); // Cambia el estado a false una vez que se carga el contenido
        };

        loadData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        iniciarSesion(values);
    };

    if (loading) {
        return <SPLoader />; // Muestra el loader mientras se carga
    }

    return (
        <div className="login-container">
            <div className="content-container">
                <div className="form-container">
                    <h1 className="centered-title">INICIO SESIÓN</h1>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div>
                            <label className="nombre-input">CORREO</label>
                            <input
                                type="email"
                                placeholder="Ingrese su correo"
                                className="input-field"
                                name="correo"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="nombre-input">CONTRASEÑA</label>
                            <input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                className="input-field"
                                name="contraseña"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn-login">INICIAR SESIÓN</button>
                        </div>
                        <Link to="/registro" className="text-decoration-none">
                            <p className="registrarse">¿No tienes una cuenta? Regístrate</p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SPLoader from '../loader/Loader'; 

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

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 600));
            setLoading(false);
        };

        loadData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        iniciarSesion(values);
    };

    if (loading) {
        return <SPLoader />;
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.formContainer}>
                    <h1 className={styles.centeredTitle}>INICIO SESIÓN</h1>
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <div>
                            <label className={styles.nombreInput}>CORREO</label>
                            <input
                                required
                                type="email"
                                placeholder="Ingrese su correo"
                                className={styles.inputField}
                                name="correo"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className={styles.nombreInput}>CONTRASEÑA</label>
                            <input
                                required
                                type="password"
                                placeholder="Ingrese su contraseña"
                                className={styles.inputField}
                                name="contraseña"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className={styles.btnLogin}>INICIAR SESIÓN</button>
                        </div>
                        <Link to="/registro" className={styles.textDecorationNone}>
                            <p className={styles.registrarse}>¿No tienes una cuenta? Regístrate</p>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

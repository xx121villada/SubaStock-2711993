/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./sesionIniciada.module.css";
import Swal from "sweetalert2";
import useAuth from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

function UserIniciado() {
    const { userData } = useAuth();
    const [idUsuario, setIdUsuario] = useState(null);
    const navigate = useNavigate();


    const handleRegistroExitoso = () => {
        setRegistroAnimal(false); 
        navigate("/ver-animales"); 
    };
    useEffect(() => {
        if (userData?.data?.id && idUsuario === null) {
            const usuarioId = userData.data.id;
            setIdUsuario(usuarioId);
            localStorage.setItem("idUsuario", usuarioId);
        }
    }, [userData, idUsuario]);

    const Cerrar = useCallback(() => {
        Swal.fire({
            title: "¿Estás seguro de cerrar sesión?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cerrar Sesión",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Sesión cerrada", "Tu sesión ha sido finalizada", "success");
                localStorage.clear();
                sessionStorage.clear();
                window.location.hash = "/";
            }
        });
    }, []);

    return (
        <div className={styles.sesionContainer}>
            <div className={styles.contentContainer}>
                <main className={styles.appMain}>
                    <div className={styles.buttonContainer}>
                        <h1 className={styles.centeredTitle}>BIENVENIDO A SUBASTOCK</h1>
                        <Link to="/Subastar">
                            <button className={styles.button}>SUBASTAR</button>
                        </Link>
                        <Link to="/">
                            <button className={styles.button}>VER SUBASTAS</button>
                        </Link>
                        <Link to="/favoritos">
                            <button className={styles.button}>FAVORITOS</button>
                        </Link>
                        <Link to="/registro-animales">
                            <button className={styles.button}>REGISTRAR ANIMAL</button>
                        </Link>
                        <Link to="/actualizar-contra">
                            <button className={styles.button}>ACTUALIZAR CONTRASEÑA</button>
                        </Link>
                        <Link to="/ver-animales">
                            <button className={styles.button}>MIS ANIMALES</button>
                        </Link>
                        <Link to="/mis-subastas">
                            <button className={styles.button}>MIS SUBASTAS</button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserIniciado;

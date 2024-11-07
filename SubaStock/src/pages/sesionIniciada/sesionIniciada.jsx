import { Link } from "react-router-dom";
import styles from "./sesionIniciada.module.css";
import Swal from "sweetalert2";
import useAuth from '../../contexts/AuthContext'

function SesionIniciada() {
    const Cerrar = () => {
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
    };
    const { userData } = useAuth();
    const idUsuario = userData ? userData.id : null;
    if (idUsuario) {
        localStorage.setItem("idUsuario", idUsuario);
    }



    return (

        <div className={styles.sesionContainer}>
            <div className={styles.contentContainer}>
                <main className={styles.appMain}>
                    <div className={styles.buttonContainer}>
                        <h1 className={styles.centeredTitle}>BIENVENIDO A SUBASTOCK</h1>
                        <Link to="/Subastar">
                            <button className={styles.button}>SUBASTAR</button>
                        </Link>
                        <button className={styles.button}>VER SUBASTAS</button>
                        <Link to="/favoritos">
                            <button className={styles.button}>FAVORITOS</button>
                        </Link>
                        <Link to="/registro-animales">
                            <button className={styles.button}>REGISTRAR ANIMAL</button>
                        </Link>
                        <Link to="/ver-animales">
                            <button className={styles.button}>VER ANIMALES</button>
                        </Link>
                        <button className={styles.button} onClick={Cerrar}>
                            CERRAR SESION
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default SesionIniciada;
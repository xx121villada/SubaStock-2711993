import styles from "./actualizar.module.css"; // Importar estilos desde el módulo CSS
import React, { useState } from "react";

const CambiarContraseña = () => {
    const [contraseñaActual, setContraseñaActual] = useState("");
    const [nuevaContraseña, setNuevaContraseña] = useState("");
    const [confirmarContraseña, setConfirmarContraseña] = useState("");
    const [mensaje, setMensaje] = useState(null);

    const manejarEnvio = async (e) => {
        e.preventDefault();

        if (nuevaContraseña !== confirmarContraseña) {
            setMensaje("Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await fetch(import.meta.env.VITE_API_URL + "/recuperar/cambiarContraseña", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contraseñaActual,
                    nuevaContraseña,
                }),
                credentials: "include", // Esto asegura que las cookies de sesión sean enviadas.
            });

            const data = await response.json();

            if (data.success) {
                setMensaje("Contraseña actualizada correctamente.");
                setContraseñaActual("");
                setNuevaContraseña("");
                setConfirmarContraseña("");
            } else {
                setMensaje(data.message);
            }
        } catch (error) {
            setMensaje("Error al actualizar la contraseña. Inténtalo nuevamente.");
        }
    };

    return (
        <div className={styles["cambiar-contraseña-container"]}>
            <div>
                <h2>Cambiar Contraseña</h2>
                {mensaje && <p className={styles["mensaje"]}>{mensaje}</p>}
                <form onSubmit={manejarEnvio}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="contraseñaActual">Contraseña Actual</label>
                        <input
                            type="password"
                            id="contraseñaActual"
                            value={contraseñaActual}
                            onChange={(e) => setContraseñaActual(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="nuevaContraseña">Nueva Contraseña</label>
                        <input
                            type="password"
                            id="nuevaContraseña"
                            value={nuevaContraseña}
                            onChange={(e) => setNuevaContraseña(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="confirmarContraseña">Confirmar Nueva Contraseña</label>
                        <input
                            type="password"
                            id="confirmarContraseña"
                            value={confirmarContraseña}
                            onChange={(e) => setConfirmarContraseña(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Actualizar Contraseña</button>
                </form>
            </div>
        </div>
    );
};

export default CambiarContraseña;

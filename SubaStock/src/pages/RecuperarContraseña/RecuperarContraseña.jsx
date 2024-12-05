import styles from "./recuperarContraseña.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

const RecuperarContraseña = () => {
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL + "/recuperar/EnviarCorreo", 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }), 
                }
            );

            const data = await response.json();  

            if (data.status) {
                Swal.fire({
                    title: "¡Éxito!",
                    text: "Correo enviado correctamente. Revisa tu bandeja de entrada.",
                    icon: "success",
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: data.message,
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: `No se pudo enviar el correo: ${error.message}`,
                icon: "error",
            });
        }
    };

    return (
        <div className={styles.recuperarContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.formContainer}>
                    <h1 className={styles.centeredTitle}>RECUPERAR CONTRASEÑA</h1>
                    <form className={styles.recuperarForm} onSubmit={handleSubmit}>
                        <div>
                            <label className={styles.nombreInput}>CORREO</label>
                            <input
                                required
                                type="email"
                                placeholder="Ingresa tu correo"
                                className={styles.inputField}
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button type="submit" className={styles.btnEnviar}>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RecuperarContraseña;

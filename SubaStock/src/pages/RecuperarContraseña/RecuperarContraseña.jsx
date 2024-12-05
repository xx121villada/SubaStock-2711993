import styles from './recuperarContraseña.module.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const RecuperarContraseña = () => {
  const [correo, setCorreo] = useState('');

  const generarContraseña = () => {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';
    for (let i = 0; i < 8; i++) {
      contraseña += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length),
      );
    }
    return contraseña;
  };

  const esContraseñaValida = (contraseña) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(contraseña);

  const generarContraseñaValida = () => {
    let contraseña = generarContraseña();
    while (!esContraseñaValida(contraseña)) {
      contraseña = generarContraseña();
    }
    return contraseña;
  };

  const handleChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!correo) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un correo válido.',
        icon: 'error',
      });
      return;
    }

    const nuevaContraseña = generarContraseñaValida();

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/usuario/NuevaContra',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ correo, contraseña:nuevaContraseña }),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status) {
        Swal.fire({
          title: 'Contraseña generada',
          text: data.message,
          icon: 'success',
        });
        setCorreo('');
      }
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: err,
        icon: 'error',
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
                value={correo}
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

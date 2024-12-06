import React, { useState } from 'react';

const ActualizarContrasena = () => {
    const [correo, setCorreo] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleActualizar = async () => {
        // Validar que las contraseñas coincidan
        if (nuevaContrasena !== confirmarContrasena) {
            setMensaje('Las contraseñas no coinciden.');
            return;
        }

        // Validar que la contraseña tenga al menos 6 caracteres
        if (nuevaContrasena.length < 6) {
            setMensaje('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        try {
            const response = await fetch(
                import.meta.env.VITE_API_URL + '/usuario/Contrasena', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo, contraseña: nuevaContrasena }),
            });

            const data = await response.json();
            if (data.success) {
                setMensaje(data.message || 'Contraseña actualizada correctamente.');
            } else {
                setMensaje(data.message || 'Error al actualizar la contraseña.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMensaje('Hubo un problema con la solicitud. Intenta nuevamente más tarde.');
        }
    };

    return (
        <div>
            <h3>Actualizar Contraseña</h3>
            {mensaje && <p>{mensaje}</p>}
            <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <input
                type="password"
                placeholder="Nueva contraseña"
                value={nuevaContrasena}
                onChange={(e) => setNuevaContrasena(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
            />
            <button onClick={handleActualizar}>Actualizar Contraseña</button>
        </div>
    );
};

export default ActualizarContrasena;

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function HistorialAliemto() {
    const [idAnimal, setIdAnimal] = useState('');
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const storedIdAnimal = localStorage.getItem('idAnimal');
        if (storedIdAnimal) {
            setIdAnimal(storedIdAnimal);
        }
    }, []);

    const fetchHistorial = async () => {
        try {
            const response = await fetch(`http://localhost:8000/alimentacion/Obtener/${idAnimal}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);

            if (data.status) {
                setHistorial(data.alimentos);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.message
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message
            });
        }
    };

    const eliminarAlimento = async (idAlimentacion) => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro de eliminar este alimento?',
                text: "Una vez eliminado, no se podrá recuperar!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminarlo!'
            });

            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:8000/alimentacion/Eliminar/${idAlimentacion}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();

                if (data.status) {
                    Swal.fire(
                        'Eliminado!',
                        'El alimento ha sido eliminado.',
                        'success'
                    );
                    fetchHistorial();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al eliminar el alimento.'
            });
        }
    };

    useEffect(() => {
        if (idAnimal) {
            fetchHistorial();
        }
    }, [idAnimal]);

    return (
        <div>
            <h1>Historial de Alimentos {idAnimal}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de Alimento</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.length > 0 ? (
                        historial.map((alimento) => (
                            <tr key={alimento.idAlimentacion}>
                                <td>{alimento.tipo_alimento}</td>
                                <td>{alimento.cantidad}</td>
                                <td>{alimento.fecha}</td>
                                <td>
                                    <button onClick={() => eliminarAlimento(alimento.idAlimentacion)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No hay datos para mostrar</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

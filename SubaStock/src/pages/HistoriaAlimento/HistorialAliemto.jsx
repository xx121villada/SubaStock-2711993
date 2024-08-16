import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function HistorialAliemto() {
    const { idAnimal } = useParams();
    const [historial, setHistorial] = useState([]);

    const fetchHistorial = () => {
        console.log(idAnimal);
        fetch(`http://localhost:8000/alimentacion/Obtener/${idAnimal}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            if (data.status) {
                setHistorial(data.alimentos);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.message
                });
            }
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message
            });
        });
    };

    useEffect(() => {
        fetchHistorial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    </tr>
                </thead>
                <tbody>
                    {historial.length > 0 ? (
                        historial.map((alimento) => (
                            <tr key={alimento.idAlimentacion}>
                                <td>{alimento.tipo_alimento}</td>
                                <td>{alimento.cantidad}</td>
                                <td>{alimento.fecha}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No se encontraron alimentos para el animal seleccionado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

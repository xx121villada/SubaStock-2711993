/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './styles/HistorialVacunacion.css';

export default function HistorialVacunacion() {
    const [idAnimal, setIdAnimal] = useState('');
    const [historial, setHistorial] = useState([]);
    const [marca, setMarca] = useState('');

    useEffect(() => {
        const storedIdAnimal = localStorage.getItem('idAnimal');
        if (storedIdAnimal) {
            setIdAnimal(storedIdAnimal);
        }
        const storedMarca = localStorage.getItem('marcaAnimal');
        if (storedMarca) {
            setMarca(storedMarca);
        }
    }, []);

    useEffect(() => {
        if (idAnimal) {
            fetchHistorial();
        }
    }, [idAnimal]);
    
    const fetchHistorial = async () => {
        try {
            const response = await fetch(`https://apisubastock.cleverapps.io/medicamento/Obtener/${idAnimal}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            console.log(idAnimal)

            if (data.status) {
                setHistorial(data.medicamento);
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Información',
                    text: "No hay registros de vacunas"
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

    const eliminarVacuna = async (idMedicamento) => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro de eliminar esta vacuna?',
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar'
            });
            if (result.isConfirmed) {
                const response = await fetch(`https://apisubastock.cleverapps.io/medicamento/Eliminar/${idMedicamento}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();

                if (data.status) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: 'Vacuna eliminada correctamente'
                    });
                    fetchHistorial();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message
                    });
                }
            }
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: e.message
            });
        }
    };

    return (
        <div className="historia-container-vacunacion">
            <h1 className="vacuancion-title">Historial de Vacunación {marca}</h1>
            <table className="historial-table-vacunacion">
                <thead>
                    <tr>
                        <th>Vacuna</th>
                        <th>Fecha</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.length > 0 ? (
                        historial.map((vacuna) => (
                            <tr key={vacuna.idMedicamento}>
                                <td>{vacuna.nombre}</td>
                                <td>{vacuna.fecha}</td>
                                <td>
                                    <button
                                        className="btn-delete-vacunacion"
                                        onClick={() => eliminarVacuna(vacuna.idMedicamento)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-data">No hay datos para mostrar</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

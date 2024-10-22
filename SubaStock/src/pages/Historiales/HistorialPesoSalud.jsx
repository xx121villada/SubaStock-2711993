/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './styles/HistorialPesoSalud.css';

export default function HistorialPesoSalud() {
    const [historial, setHistorial] = useState([]);
    const [idAnimal, setIdAnimal] = useState('');
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

    const fetchHistorial = async () => {
        try {
            const response = await fetch(`https://apisubastock.cleverapps.io/estadoSalud/Obtener/${idAnimal}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            console.log(data);

            if (data.status) {
                setHistorial(data.estadoSalud);
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Información',
                    text: "No hay registros de peso ni de salud" 
                });
            }
        } catch (e) {
            Swal.fire({ title: 'Error al cargar datos', icon: 'error' });
            console.error(e);
        }
    };

    const eliminarPeso = async (idEstado_Salud) => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro de eliminar este peso?',
                text: "Esta acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar!',
            });
            if (result.isConfirmed) {
                const response = await fetch(`http://localhost:8000/medicamento/Eliminar/${idEstado_Salud}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();

                if (data.status) {
                    Swal.fire({ title: 'Peso y estado de salud eliminado correctamente', icon: 'success' });
                    fetchHistorial();
                } else {
                    Swal.fire({ title: data.message, icon: 'error' });
                }
            }
        } catch (e) {
            Swal.fire({ title: 'Error al eliminar peso y estado de salud', icon: 'error' });
            console.error(e);
        }
    };

    useEffect(() => {
        if(idAnimal){
            fetchHistorial();
        }
    }, [idAnimal]);

    return (
        <div className="historial-container-pesoSalud">
            <h1 className="alimento-title">Historial de Peso y Estado de Salud del Animal - {marca}</h1>
            <table className="historial-table-pesoSalud">
                <thead>
                    <tr>
                        <th>Peso</th>
                        <th>Fecha</th>
                        <th>Estado de Salud</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.length > 0 ? (
                        historial.map((pesoSalud) => (
                            <tr key={pesoSalud.idEstado_Salud}>
                                <td>{pesoSalud.peso}-Kl</td>
                                <td>{pesoSalud.fecha}</td>
                                <td>{pesoSalud.estado}</td>
                                <td>
                                    <button 
                                        className="btn-delete-pesoSalud"
                                        onClick={() => eliminarPeso(pesoSalud.idEstado_Salud)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="no-data">No hay datos para mostrar</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

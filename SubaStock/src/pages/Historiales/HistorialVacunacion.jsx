/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function HistorialVacunacion() {
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
            const response = await fetch(`http://localhost:8000/medicamento/Obtener/${idAnimal}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            if (data.status) {
                setHistorial(data.historial);
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Informacion',
                    text: "NO hay registros de vacunas"
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
        try{
            const result = await Swal.fire({
                title: '¿Estás seguro de eliminar esta vacuna?',
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar'
            });
            if(result.isConfirmed){
                const response = await fetch(`http://localhost:8000/medicamento/Eliminar/${idMedicamento}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();

                if(data.status){
                    Swal.fire({
                        icon:'success',
                        title: 'Exito',
                        text: 'Vacuna eliminada correctamente'
                    });
                    fetchHistorial();
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: data.message
                    });
                }
            }
        }catch(e){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: e.message
            });
        }
    };

    useEffect(() => {
        fetchHistorial();
    }, [idAnimal]);

    return (
        <div>
            <h1>Historial de Vacunación {idAnimal}</h1>
            <table>
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
                                     <button onClick={() => eliminarVacuna(vacuna.idMedicamento)}>
                                        Eliminar
                                     </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No hay datos para mostrar</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

import { useEffect, useState } from "react";
import CardTiposEspecie from "./CardTiposEspecie";
import bovino from './img/Bovino.png'
import porcino from './img/Porcino.png'
import caprino from './img/Caprino.png';
import notFount from './img/Notfount.png';
import './styles/TipoAnimal.css';

const imageMapEspecies = {
    "Bovino": bovino,
    "Porcino": porcino,
    "Caprino": caprino,
    "default": notFount
};

export default function ListTipoEspecie() {
    const [especies, setEspecies] = useState([]);
    const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        const obtenerDatosEspecies = async () => {

            try {

                const idUsuario = sessionStorage.getItem('idUsuario');
                if (idUsuario) {
                    setIdUsuario(idUsuario);

                    const response = await fetch(`https://apisubastock.cleverapps.io/animal/Obtener/${idUsuario}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();

                    if (data.animal) {
                        const especiesUnicas = {};
                        data.animal.forEach(animal => {
                            if (!especiesUnicas[animal.especie]) {
                                especiesUnicas[animal.especie] = animal;
                            }
                        });

                        // Convertir el objeto de especies unicas en un array
                        setEspecies(Object.values(especiesUnicas));
                    }
                }
            } catch (error) {
                console.error('Error al obtener las especies:', error);
            }
        };

        // Llama a la función asíncrona
        obtenerDatosEspecies();
    }, [idUsuario]);

    const cards = especies.map((animal) =>
        <CardTiposEspecie
            key={animal.especie}
            tipoEspecie={animal}
            imagen={imageMapEspecies[animal.especie] || imageMapEspecies["default"]}
        />
    );

    return (
        <div>
            {especies.length > 0 ? (

                <>
                    <h1>Tipo y especie de animales registrados:</h1>
                    {cards}
                </>
            ) : (
                <h1 className="text-center text-success p-2">No hay animales registrados.</h1>
            )}
        </div>
    );
}

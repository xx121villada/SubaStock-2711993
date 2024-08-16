import { useEffect, useState } from "react";
import CardTiposEspecie from "./CardTiposEspecie";
import bovino from './img/Bovino.png'
import porcino from './img/Porcino.png'
import notFount from './img/Notfount.png';
import './styles/TipoAnimal.css';

// Mapeo de especies a imágenes
const especieToImageMap = {
    "Bovino": bovino,
    "Porcino": porcino,
    "default": notFount
};

export default function ListTipoEspecie() {
    const [especies, setEspecies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/animal/Obtener', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const especiesUnicas = {};
            data.animales.forEach(animal => {
                if (!especiesUnicas[animal.especie]) {
                    especiesUnicas[animal.especie] = animal;
                }
            });

            // Convertir el objeto de especies únicas en un array
            setEspecies(Object.values(especiesUnicas));
        })
        .catch(error => {
            console.error('Error al obtener las especies:', error);
        });
    }, []);

    // Crear las tarjetas
    const cards = especies.map((animal) =>
        <CardTiposEspecie
            key={animal.especie}
            tipoEspecie={animal}
            imagen={especieToImageMap[animal.especie] || especieToImageMap["default"]}
        />
    );

    return (
        <div className='divCards'>
            {cards}
        </div>
    );
}

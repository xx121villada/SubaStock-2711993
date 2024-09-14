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
        const storedIdUsuario = localStorage.getItem('idUsuario');
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        }
    }, []);

    useEffect(() => {
        if (idUsuario) {
            fetch(`http://localhost:8000/animal/Obtener/${idUsuario}`, {
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
            })
            .catch(error => {
                console.error('Error al obtener las especies:', error);
            });
        }
    }, [idUsuario]);

    const cards = especies.map((animal) =>
        <CardTiposEspecie
            key={animal.especie}
            tipoEspecie={animal}
            imagen={imageMapEspecies[animal.especie] || imageMapEspecies["default"]}
        />
    );

    return (
        <div className='divCards'>
            {cards}
        </div>
    );
}

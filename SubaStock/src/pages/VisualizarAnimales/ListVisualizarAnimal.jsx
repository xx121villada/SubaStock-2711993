import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardVisualizarAnimal from "./CardVisualizarAnimal";
import bovino from '../Animales/img/Bovino.png'
import porcino from '../Animales/img/Porcino.png'
import notFount from '../Animales/img/Notfount.png';
import caprino from '../Animales/img/Caprino.png';

export default function ListVisualizarAnimal() {
    const [animals, setAnimals] = useState([]);
    const { tipoAnimal } = useParams();
    const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        const storedIdUsuario = localStorage.getItem('idUsuario');
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        }
    }, []);

    const especieToImageMap = {
        "Bovino": bovino,
        "Porcino": porcino,
        "Caprino": caprino,
        "default": notFount
    };

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
                    const animalesFiltrados = data.animal.filter(animal =>
                        animal.especie.toLowerCase() === tipoAnimal.toLowerCase()
                    );
                    setAnimals(animalesFiltrados);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        }
    }, [tipoAnimal, idUsuario]);

    const cards = animals.map((animal) =>
        <CardVisualizarAnimal
            key={animal.idAnimal}
            visualizarAnimal={animal}
            imagen={especieToImageMap[animal.especie] || especieToImageMap["default"]}
        />
    );

    return (
        <div className='divCards'>
            {cards}
        </div>
    );
}

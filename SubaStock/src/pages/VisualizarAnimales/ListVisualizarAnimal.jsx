import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardVisualizarAnimal from "./CardVisualizarAnimal";
import bovino from '../Animales/img/Bovino.png'
import porcino from '../Animales/img/Porcino.png'
import notFount from '../Animales/img/Notfount.png';

export default function ListVisualizarAnimal() {
    const [animals, setAnimals] = useState([]);
    const { tipoAnimal } = useParams();

    const especieToImageMap = {
        "Bovino": bovino,
        "Porcino": porcino,
        "default": notFount
    };

    useEffect(() => {
        fetch('http://localhost:8000/animal/Obtener')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {

                const animalesFiltrados = data.animales.filter(animal =>
                    animal.especie.toLowerCase() === tipoAnimal.toLowerCase()
                );
                setAnimals(animalesFiltrados);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [tipoAnimal]);

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

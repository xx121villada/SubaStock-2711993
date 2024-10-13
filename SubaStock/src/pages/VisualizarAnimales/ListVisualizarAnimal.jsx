import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardVisualizarAnimal from "./CardVisualizarAnimal";
import bovino from '../Animales/img/Bovino.png'
import porcino from '../Animales/img/Porcino.png'
import notFount from '../Animales/img/Notfount.png';
import caprino from '../Animales/img/Caprino.png';
import equino from '../Animales/img/Equino.png';
import apino from '../Animales/img/Apino.png';

export default function ListVisualizarAnimal() {
    const [animales, setAnimales] = useState([]);
    const { tipoAnimal } = useParams();
    const [idUsuario, setIdUsuario] = useState('');

    useEffect(() => {
        const storedIdUsuario = sessionStorage.getItem('idUsuario');
        if (storedIdUsuario) {
            setIdUsuario(storedIdUsuario);
        }
    }, []);

    const especieToImageMap = {
        "Bovino": bovino,
    "Porcino": porcino,
    "Caprino": caprino,
    "Equino": equino,
    "Avicultura": apino,
    "default": notFount
    };

    useEffect(() => {
        if (idUsuario) {
            fetch(`https://apisubastock.cleverapps.io/animal/Obtener/${idUsuario}`, {
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
                        setAnimales(animalesFiltrados);
                    }
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [tipoAnimal, idUsuario]);

    const cards = animales.map((animal) =>
        <CardVisualizarAnimal
            key={animal.idAnimal}
            visualizarAnimal={animal}
            imagen={especieToImageMap[animal.especie] || especieToImageMap["default"]}
        />
    );

    return (
        <div style={styles.contendCards}>
            {animales.length > 0 ? (
                <>
                    <h1 style={styles.title}>Animales de la raza {tipoAnimal}</h1>
                    <div style={styles.containerCards}>
                        {cards}
                    </div>
                </>
            ) : (
                <h1 style={styles.title}>No hay animales registrados de este tipo.</h1>
            )}
        </div>
    );
}

const styles = ({
    contendCards: {
        padding: '20px',
        maxWidth: '1400px',
        margin: '0 auto',
    },
    title: {
        fontSize: '28px',
        marginBottom: '30px',
        textAlign: 'center',
        color: '#5cb90c',
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(100, 129, 55, 0.25)',
    },
    containerCards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px',
    },
});


import { useEffect, useState } from "react";
import CardTiposEspecie from "./CardTiposEspecie";
import bovino from './img/Bovino.png';
import porcino from './img/Porcino.png';
import caprino from './img/Caprino.png';
import equino from './img/Equino.png';
import apino from './img/Apino.png';
import notFount from './img/Notfount.png';

const imageMapEspecies = {
    "Bovino": bovino,
    "Porcino": porcino,
    "Caprino": caprino,
    "Equino": equino,
    "Avicultura": apino,
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

                    const response = await fetch(
                        `https://apisubastock.cleverapps.io/animal/Obtener/${idUsuario}`,
                        {
                            method: 'GET',
                            headers: { 'Content-Type': 'application/json' }
                        }
                    );

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

                        setEspecies(Object.values(especiesUnicas));
                    }
                }
            } catch (error) {
                console.error('Error al obtener las especies:', error);
            }
        };

        obtenerDatosEspecies();
    }, [idUsuario]);

    const cards = especies.map((animal) => (
        <CardTiposEspecie
            key={animal.especie}
            tipoEspecie={animal}
            imagen={imageMapEspecies[animal.especie] || imageMapEspecies["default"]}
        />
    ));

    return (
        <div style={styles.containerPrincipal}>
            {especies.length > 0 ? (
                <>
                    <h1 style={styles.tituloAnimales}>Tipos de Especie</h1>
                    <div style={styles.containerCards}>{cards}</div>
                </>
            ) : (
                <h1 style={styles.tituloAnimales}>No hay animales registrados.</h1>
            )}
        </div>
    );
}

const styles = {
    containerPrincipal: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    tituloAnimales: {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#5cb90c',
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
    containerCards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
    },
    
};

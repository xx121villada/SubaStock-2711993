import React, { useState, useEffect } from 'react';
import Tarjeta from '../../components/Tarjeta';

const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [error, setError] = useState(null);

    // Función para obtener los favoritos desde la API
    const obtenerFavoritos = () => {
        fetch('https://apisubastock.cleverapps.io/subasta/favoritos/obtener') // Cambia la URL según tu API
            .then(response => response.json())
            .then(data => {
                setFavoritos(data); // Asumiendo que la respuesta es un array de objetos
            })
            .catch(err => {
                setError('Error al obtener favoritos');
                console.error(err);
            });
    };

    useEffect(() => {
        obtenerFavoritos(); // Cargar favoritos al montar el componente
    }, []);

    return (
        <div>
            <h1>Mis Favoritos</h1>
            {error && <p>{error}</p>}
            <div className="d-flex flex-wrap gap-3">
                {favoritos.map(favorito => (
                    <Tarjeta
                        key={favorito.itemId}
                        itemId={favorito.itemId} 
                        fechaFin={favorito.fechaFin}
                        titulo={favorito.titulo}
                        imgs={favorito.imgs}
                        ubicacion={favorito.ubicacion}
                        numeroPujas={favorito.numeroPujas}
                        pujaMasAlta={favorito.pujaMasAlta}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favoritos;

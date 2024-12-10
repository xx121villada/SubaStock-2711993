import { useState, useEffect } from "react";
import Tarjeta from '../../components/Subastas/Tarjeta'; 
import useAuth from "../../contexts/AuthContext";
import BestLoader from "../BestLoader/BestLoader";
const MisSubastas = () => {
    const { userData} = useAuth();
    const [misSubastas, setMisSubastas] = useState([]);
    const [idUsuario, setIdUsuario] = useState('');
    const [cargando, setCargando] = useState();

    useEffect(() => {
        if (userData && userData.data) {
            setIdUsuario(userData.data.id);
        }
    }, [userData]);

    useEffect(() => {
        if (idUsuario) {
            setCargando(true)
            fetch(import.meta.env.VITE_API_URL + `/subasta/SubastasPorUsuario/${idUsuario}`)
                .then((response) => {
                    if (!response.ok) throw new Error("Error al obtener las subastas");
                    setCargando(false);
                    return response.json();
                })
                .then((data) => {
                    const subastasConEstado = data.Subastas.map(subasta => {
                        const fechaFin = new Date(subasta.fechaFin).getTime();
                        subasta.isEnded = fechaFin < Date.now();
                        return subasta;
                    });
                    setMisSubastas(subastasConEstado);
                    setCargando(false);
                })
                .catch((error) => console.error("Error:", error));
        }
    }, [idUsuario]);

    if (cargando) {
        return(
            <BestLoader/>
        )
    }else{
        return (
            <div>
                <h1
                    style={{
                        width: '60vw',
                        textAlign: "center",
                        justifySelf: "center",
                        marginTop: 100,
                        fontSize: "32px",
                        fontWeight: "bold",
                        color: "#333",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                        letterSpacing: -1,
                        whiteSpace: "nowrap",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        borderRadius: 5,
                        padding: 20,
                        backgroundColor: "white",
                    }}
                >MIS SUBASTAS</h1>
                {misSubastas.length > 0 ? (
                    <div
                        className="container-lg"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: 20,
                            paddingBottom: 15,
                            minHeight: "100svh",
                            boxSizing: "border-box",
                            marginTop: 60,
                        }}
                    >
                        {misSubastas.map((subasta) => (
                            <Tarjeta
                                {...subasta}
                                key={subasta.idSubasta}
                                isEnded={subasta.isEnded}
                            />
                        ))}
                    </div>
                ) : (
                    <p>No tienes Subastas</p>
                )}
            </div>
        );
    };
}

export default MisSubastas;
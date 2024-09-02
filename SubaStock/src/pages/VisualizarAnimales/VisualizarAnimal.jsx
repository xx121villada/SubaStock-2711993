import ListVisualizarAnimal from "./ListVisualizarAnimal";
import { Link } from "react-router-dom";

export default function VisualizarAnimal() {
    return (
        <div>
            <div className="w-100 d-flex justify-content-start align-items-center mb-3">
                <button className="back-button ms-2">
                    <Link to={'/ver-animales'} className="text-decoration-none text-dark">
                        Regresar
                    </Link>
                </button>
            </div>
            <h1 className="text-center">Mis Animales</h1>
            <ListVisualizarAnimal />
        </div>
    );
}

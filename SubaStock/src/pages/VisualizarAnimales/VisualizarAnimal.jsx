import ListVisualizarAnimal from "./ListVisualizarAnimal";
import { Link } from "react-router-dom";
export default function VisualizarAnimal() {
  return (
    <div>
      <div className="back-container p-2">
        <Link to='/tipos-especie' className="back-link">
          <i className="link-back bi bi-caret-left-fill fw-semibold">Regresar</i>
        </Link>
      </div>
      <h1 className="text-center">Mis Animales</h1>
      <ListVisualizarAnimal />
    </div>
  );
}


import { Link } from "react-router-dom"
import ListTipoEspecie from "./ListTipoEspecie"

export default function Animales() {
    return (
        <div>
            <div className="back-container p-2">
                <Link to='/sesion-iniciada' className="back-link">
                    <i className="link-back bi bi-caret-left-fill fw-semibold">Regresar</i>
                </Link>
            </div>
            <h1 className="text-center text-success m-2">
                Tipos de Especie
            </h1>
            <div>
                <ListTipoEspecie/>
            </div>
        </div>

    )
}

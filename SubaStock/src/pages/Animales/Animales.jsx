
import { Link } from "react-router-dom"
import ListTipoEspecie from "./ListTipoEspecie"

export default function Animales() {
    return (
        <div>
            <div className="w-100 d-flex justify-content-start align-items-center mb-3">
                <button className="back-button ms-2">
                    <Link to={'/sesion-iniciada'} className="text-decoration-none text-dark">
                        Regresar
                    </Link>
                </button>
            </div>
            <h1 className="text-center text-success m-2">
                Tipos de Especie
            </h1>
            <div>
                <ListTipoEspecie />
            </div>
        </div>

    )
}

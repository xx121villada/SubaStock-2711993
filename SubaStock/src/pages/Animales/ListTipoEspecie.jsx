import CardTiposEspecie from "./CardTiposEspecie";
import DataTipoEspecie from "./DataTipoEspecie";
import './styles/TipoAnimal.css';

export default function ListTipoEspecie() {
    const cards = DataTipoEspecie.map((tipoEspecie) =>
        <CardTiposEspecie
            key={tipoEspecie.id}
            tipoEspecie={tipoEspecie}
        />
    )
    return (
        <div className='divCards'>
            {cards}
        </div>
    );
}

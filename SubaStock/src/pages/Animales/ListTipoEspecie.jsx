import CardTiposEspecie from "./CardTiposEspecie";
import DataTipoEspecie from "./DataTipoEspecie";

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

import CardVisualizarAnimal from "./CardVisualizarAnimal";
import DataVisualizarAnimal from "./DataVisualizarAnimal";

export default function ListVisualizarAnimal() {

    const cards = DataVisualizarAnimal.map((visualizarAnimal) =>
        <CardVisualizarAnimal
            key={visualizarAnimal.id}
            visualizarAnimal={visualizarAnimal}
        />
    )
    return (
        <div className='divCards'>
            {cards}
        </div>
    );
}

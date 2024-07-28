import DataAnimal from './DataAnimal';
import CardAnimal from './CardAnimal';

export default function CardList() {
    const cards = DataAnimal.map((animal) =>
            Array.from({ length: 9 }).map(() => (
                <CardAnimal 
                    key={animal.id}
                    animal={animal} 
                />
            ))
        )
    return (
        <div className='divCards'>
            {cards}
        </div>
    );
}

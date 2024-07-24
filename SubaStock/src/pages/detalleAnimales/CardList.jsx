import dataAnimal from './DataAnimal';
import AnimalCard from './CardAnimal';

export default function CardList() {
    const cards = dataAnimal.map((animal) =>
            Array.from({ length: 9 }).map(() => (
                <AnimalCard 
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

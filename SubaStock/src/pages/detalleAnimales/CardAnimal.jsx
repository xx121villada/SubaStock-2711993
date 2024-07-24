/* eslint-disable react/prop-types */
import './styles/CardAnimal.css'
import { Link } from 'react-router-dom'
export default function Card({ animal }) {
    return (
            <div className="cardAnimal">
                <div className="img-container">
                    <img className="img-animal" src={animal.img} alt="Card image cap" />
                </div>
                <div className="content">
                    <h5 className="card-name">{animal.name}</h5>
                    <Link to='/publicar-subasta'>
                    <button className='btn-subastar'>Subastar</button>
                    </Link>
                </div>
            </div>
    )
}

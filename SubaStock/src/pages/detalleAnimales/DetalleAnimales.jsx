
import back from './img/back.svg';
export default function DetalleAnimales() {
    return (
        <div className="bg-light">
            <div>
            <img className='text-start p-3' src={back} alt="Atras" />
            <h1 className="text-success fs-4 text-center p-2">SUBASTOCK</h1>
            </div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2 p-3" type="search" placeholder="Buscar..."/>
                        <button type="button" className="btn btn-success m-0 rounded-pill">Success</button>
                        </form>
                </div>
            </nav>
        </div>
    )
}

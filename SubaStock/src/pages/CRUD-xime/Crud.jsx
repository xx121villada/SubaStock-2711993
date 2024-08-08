import './Crud.css';
import Swal from 'sweetalert2';

function Crud() {

    const estaSeguro = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado',
                    'El elemento ha sido eliminado.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="auction-app">
            <div className="cow-icons">
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" />
                <p>IDENTIFICADOR</p>
                <img src="/src/pages/CRUD-xime/img/image.png" alt="Icono" />
            </div>
            <div className='body'>
                <div className="contenido">
                    <div className="botones">
                        <div className="btn">INICIO</div>
                        <div className="btn">INSERTAR</div>
                        <div className="btn" onClick={estaSeguro}>ELIMINAR</div>
                    </div>
                    <div className="tabla">
                        <p className='raza'>Vaca de raza Brahman</p>
                        <div className="menu">
                            <p>HISTORIAL DE PESO Y SALUD</p>
                        </div>
                        <div className="menu">
                            <p>HISTORIAL DE ALIMENTOS</p>
                        </div>
                        <div className="menu">
                            <p>HISTORIAL DE MEDICAMENTOS</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Crud;

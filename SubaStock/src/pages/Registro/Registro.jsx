import './registro.css';
import { Link } from 'react-router-dom';

export default function Registro() {
    return (
        <div className='container-registro'>
            <div>
                <h1>REGISTRO</h1>
            </div>
            <div>
                <div>
                    <div className='form-group row'>
                        <label>Documento:</label>
                        <div>
                            <input placeholder='Ingrese su documento' type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Nombres:</label>
                        <div>
                            <input placeholder='Ingrese sus nombres' type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Apellidos:</label>
                        <div>
                            <input placeholder='Ingrese sus apellidos' type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Teléfono:</label>
                        <div>
                            <input placeholder='Ingrese su número de teléfono' type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Correo electrónico:</label>
                        <div>
                            <input placeholder='Ingrese su correo electrónico' type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Contraseña:</label>
                        <div>
                            <input placeholder='Crear contraseña' type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Confirmar contraseña:</label>
                        <div>
                            <input placeholder='Repita su contraseña' type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='espacioBoton'>
                <Link to='/login'>
                    <button type='button' id='buton'>REGISTRARME</button>
                </Link>
            </div>
        </div>
    );
}

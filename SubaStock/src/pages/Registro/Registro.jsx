import './styles/style.css'
import { Link } from 'react-router-dom'

export default function Registro() {

    return (
        <div className='body bg-white   '>
            <div className="login">
                <h2> REGISTRO </h2>
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="form-wrap max-width-600 mx-auto">
                        <div className="form-group row">
                            <label>Documento:</label>
                            <div className="col-sm-10">
                                <input placeholder='Ingrese su documento' type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Nombres:</label>
                            <div className="col-sm-10">
                                <input placeholder='Ingrese sus nombres' type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Apellidos:</label>
                            <div className="col-sm-10">
                                <input placeholder='Ingrese sus apellidos' type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label> Telefono:</label>
                            <div className="col-sm-10">
                                <input placeholder='Ingrese su numero de telefono' type="number" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Correo electrónico:</label>
                        <div className="col-sm-10">
                            <input placeholder='Ingrese su correo electronico' type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Contraseña:</label>
                        <div className="col-sm-10">
                            <input placeholder='Crear contraseña' type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Confirmar contraseña:</label>
                        <div className="col-sm-10">
                            <input placeholder='Repita su contraseña' type="password" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='espacioBoton'>
                <Link to='/login'>
                <button type='button' id='buton' className="btn btn-outline-success btn-sm"> REGISTRARME </button>
                </Link>
            </div>
            </div>
    )
}

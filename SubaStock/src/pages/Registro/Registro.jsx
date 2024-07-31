import React, { useEffect } from 'react';
import './styles/style.css'

export default function Registro() {
    return (
        <div className='body'>
            <div className="login">
                <h2> REGISTRO </h2>
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="form-wrap max-width-600 mx-auto">
                        <div className="form-group row">
                            <label>Ingrese su documento:</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Ingrese sus nombres:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Ingrese sus apellidos:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label> Ingrese su número de telefono:</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Ingrese su correo electrónico:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Ingrese una contraseña:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Confirmar contraseña:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <button type='button' className='boton' class="btn btn-outline-success btn-sm"> REGISTRARME </button>
        </div>
    )
}

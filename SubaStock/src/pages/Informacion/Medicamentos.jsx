import React from "react";
import './styles/style.css';
import { PiCowDuotone } from "react-icons/pi";

export default function Informacion() {
    return (
        <div className='body'>
            <div className="login">
                <h3>INSERTAR MEDICAMENTOS</h3>
            </div>
            <div className="icon-container">
            <PiCowDuotone className="icon"/><button id="buton"> ------ </button><PiCowDuotone className="icon"/>
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="form-wrap max-width-600 mx-auto">
                        <div className="form-group row">
                            <label>Nombre:</label>
                            <div className="col-sm-15">
                                <input type="text" className="form-control" placeholder="Ingrese el nombre del medicamento" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Dosis:</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" placeholder="Ingrese la dosis aplicada" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botones">
                <button type='button' className='btn btn-success boton boton-insertar'>
                    INSERTAR MEDICAMENTO
                </button>
            </div>
        </div>
    );
}
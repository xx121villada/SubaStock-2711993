import React from "react";
import './styles/style.css';
import { PiCowDuotone } from "react-icons/pi";
import Medicamentos from './Medicamentos'

export default function Informacion() {
    return (
        <div className='body'>
            <div className="login">
                <h3>INSERTAR INFORMACIÓN</h3>
                <PiCowDuotone /> <button className="boton"> ------ </button> <PiCowDuotone />
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="form-wrap max-width-600 mx-auto">
                        <div className="form-group row">
                            <label>Peso:</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label>Estado de salud:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botones">
                <button onClick={<Medicamentos></Medicamentos>} type='button' className='btn btn-outline-success boton boton-registrar'>
                    REGISTRAR NUEVO MEDICAMENTO
                </button>
                <button type='button' className='btn btn-outline-success boton boton-alimentacion'>
                    REGISTRAR ALIMENTACION DEL ANIMAL
                </button>
                <button type='button' className='btn btn-success boton boton-insertar'>
                    INSERTAR
                </button>
            </div>
        </div>
    );
}

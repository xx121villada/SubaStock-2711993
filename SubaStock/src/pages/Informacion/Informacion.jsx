import React from "react";
import './styles/style.css';
import { PiCowDuotone } from "react-icons/pi";
import Medicamentos from './Medicamentos'

export default function Informacion() {
    return (
        <div className='body'>
            <div className="login">
                <h3>INSERTAR INFORMACIÓN</h3>
            </div>
            <div className="icon-container">
                <PiCowDuotone className="icon" /><button id="buton"> ------ </button><PiCowDuotone className="icon" />
            </div>
            <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                <div className="container">
                    <div className="form-wrap max-width-600 mx-auto">
                        <div className="form-group row">
                            <label>Peso:</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" placeholder="Ingrese el peso del animal" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="estadoSalud">Estado de salud:</label>
                            <div className="col-sm-10">
                                <select id="estadoSalud" className="form-control">
                                    <option value="" disabled selected>Califique el estado de salud del animal</option>
                                    <option value="excelente">Excelente</option>
                                    <option value="buena">Buena</option>
                                    <option value="regular">Regular</option>
                                    <option value="mala">Mala</option>
                                    <option value="muy-mala">Muy mala</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="botones">
                <button type='button' className='btn btn-outline-success boton boton-registrar'>
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

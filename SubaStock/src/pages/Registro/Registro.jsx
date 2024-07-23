import React, { useEffect } from 'react';

export default function Registro() {
    return (
        <div>
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

            </div>
            <div className='body'>
                <div className="login-header box-shadow">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <div className="brand-logo">
                            <a href="login.html">
                                <img src="vendors/images/deskapp-logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="login-menu">
                            <ul>
                                <li><a href="login.html">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="register-page-wrap d-flex align-items-center flex-wrap justify-content-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-7">
                                <img src="vendors/images/register-page-img.png" alt="" />
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="register-box bg-white box-shadow border-radius-10">
                                    <div className="wizard-content">
                                        <form className="tab-wizard2 wizard-circle wizard">
                                            <section>
                                                <div className="form-wrap max-width-600 mx-auto">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Documento:</label>
                                                        <div className="col-sm-8">
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Nombres:</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Apellidos:</label>
                                                        <div className="col-sm-8">
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Número de telefono:</label>
                                                        <div className="col-sm-8">
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-wrap max-width-600 mx-auto">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Correo electrónico:</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Contraseña:</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Confirmar contraseña:</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" id="success-modal-btn" hidden data-toggle="modal" data-target="#success-modal" data-backdrop="static">Launch modal</button>
                <div className="modal fade" id="success-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered max-width-400" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center font-18">
                                <h3 className="mb-20">Formulario enviado</h3>
                                <div className="mb-30 text-center"><img src="vendors/images/success.png" /></div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <a href="login.html" className="btn btn-primary">Hecho</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

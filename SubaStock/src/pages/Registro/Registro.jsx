import React, { useEffect } from 'react';
import "./styles/core.css"
import './styles/icons.css'
import './styles/styles.css'
import './styles/style.css'

export default function Registro() {
 
    return (
        <div>
            <div>
                <meta charset="utf-8" />
                <title>SubaStock</title>

                {/* <link rel="apple-touch-icon" sizes="180x180" href="vendors/images/apple-touch-icon.png" /> 
                <link rel="icon" type="image/png" sizes="32x32" href="vendors/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="vendors/images/favicon-16x16.png" /> */}

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

                {/* <link rel="stylesheet" type="text/css" href="./styles/core.css" />
                <link rel="stylesheet" type="text/css" href="./styles/icons.css" />
                <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
                <link rel="stylesheet" type="text/css" href="./styles/style.css" /> */}

                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119386393-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments)}
		gtag('js', new Date());

		gtag('config', 'UA-119386393-1');
	</script> */}

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
                                            <h5>Credenciales básicas de la cuenta</h5>
                                            <section>
                                                <div className="form-wrap max-width-600 mx-auto">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Correo electrónico*</label>
                                                        <div className="col-sm-8">
                                                            <input type="email" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Nombre de usuario*</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Contraseña*</label>
                                                        <div className="col-sm-8">
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Confirmar Contraseña*</label>
                                                        <div className="col-sm-8">
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <h5>Información personal</h5>
                                            <section>
                                                <div className="form-wrap max-width-600 mx-auto">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Nombres*</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Apellidos*</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Telefono*</label>
                                                        <div className="col-sm-8">
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <h5>Información general</h5>
                                            <section>
                                                <div className="form-wrap max-width-600 mx-auto">
                                                    <ul className="register-info">
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-sm-4 weight-600">Correo electrónico</div>
                                                                <div className="col-sm-8">example@abc.com</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-sm-4 weight-600">Nombre de usuario</div>
                                                                <div className="col-sm-8">Example</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-sm-4 weight-600">Contraseña</div>
                                                                <div className="col-sm-8">.....000</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-sm-4 weight-600">Nombre completo</div>
                                                                <div className="col-sm-8">john smith</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="custom-control custom-checkbox mt-4">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <label className="custom-control-label" htmlFor="customCheck1">He leído y acepto las condiciones de los servicios y la política de privacidad</label>
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
            cor
            {/* <script src="./scripts/core.js"></script>
            <script src="./scripts/script.min.js"></script>
            <script src="./scripts/process.js"></script>
            <script src="./scripts/layout-settings.js"></script>
            <script src="./scripts/jquery.steps.js"></script>
            <script src="./scripts/steps-setting.js"></script> */}
        </div>
    )
}

import React from 'react';
import LoginImg from './img/Login.png';

import  './Styles/core.css';
import './Styles/icon-font.min.css';
import './Styles/style.css';

function Login() {
    return (
        <div>
            <div className="login-header box-shadow">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="brand-logo">
                    <a href="login.html">
                        {/* <img src="vendors/images/deskapp-logo.svg" alt=""> </img> */}
                    </a>
                </div>
                <div className="login-menu">
                    <ul>
                        <li><a href="register.html">Registrarse</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6 col-lg-7">
					<img src={LoginImg} alt=""/>
				</div>
				<div className="col-md-6 col-lg-5">
					<div className="login-box bg-white box-shadow border-radius-10">
						<div className="login-title">
							<h2 className="text-center text-primary">Iniciar sesión</h2>
						</div>
						<form>
							
							<div className="input-group custom">
								<input type="text" className="form-control form-control-lg" placeholder="Correo"/>
								<div className="input-group-append custom">
									<span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
								</div>
							</div>
							<div className="input-group custom">
								<input type="password" className="form-control form-control-lg" placeholder="**********"/>
								<div className="input-group-append custom">
									<span className="input-group-text"><i className="dw dw-padlock1"></i></span>
								</div>
							</div>
							<div className="row pb-30">
								<div className="col-6">
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input" id="customCheck1"/>
										<label className="custom-control-label" htmlFor="customCheck1">Recordar</label>
									</div>
								</div>
								<div className="col-6">
									<div className="forgot-password"><a href="forgot-password.html">Recuperar Contraseña</a></div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-12">
									<div className="input-group mb-0">
										
										<a className="btn btn-primary btn-lg btn-block" href="index.html">Iniciar Sesión</a>
									</div>
									<div className="font-16 weight-600 pt-10 pb-10 text-center" data-color="#707373">O</div>
									<div className="input-group mb-0">
										<a className="btn btn-outline-primary btn-lg btn-block" href="register.html">Registrase para crear cuenta</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>



        </div>
    )
}

export default Login
import React from 'react'

function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SubaStock</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Subastas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Ver Subastas</a></li>
                  <li><a className="dropdown-item" href="#">Subastar Animal</a></li>
                  <li><a className="dropdown-item" href="#">Subastas Favoritas</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mis Animalitos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Ver Animales</a></li>
                  <li><a className="dropdown-item" href="#">Buscar Animal</a></li>
                  <li><a className="dropdown-item" href="#">Animales Favoritos</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mi Perfil
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Mis Datos</a></li>
                  <li><a className="dropdown-item" href="#">Help</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Cerrar Sesion</a></li>
                </ul>
              </li>
              
            </ul>
            <div className='d-flex'>
                <img src="" alt="icono de vaca" />
                <img src="" alt="de toro" />
                <img src="" alt="de cerdo " />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default header
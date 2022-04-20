import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class MainMenu extends Component{
  render(){
    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">Reventas Digitales</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="//localhost:3000" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administración
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/products">Productos</NavLink></li> 
                <li><NavLink className="dropdown-item" to="/users">Usuarios</NavLink></li>
                <li><NavLink className="dropdown-item" to="/accounts">Cuentas</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/home">Tienda</NavLink>
            </li>
          </ul>
         
          <ul className="navbar-nav navbar-light bg-light">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="//localhost:3000" id="navbarDropdownRight" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mi Cuenta
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownRight">
                <li><NavLink className="dropdown-item" to="/profile">Mi Perfil</NavLink></li>
                <li><Link className="dropdown-item" to="/home">Cerrar Sesión</Link></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  }
}

export default MainMenu;


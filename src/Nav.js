
import React from 'react'

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Inicio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#colapso" aria-controls="menu-inicio" aria-expanded="false" aria-label="inicio">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="colapso">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Contacto <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Combos</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="Dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tu Historial
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/">Compras</a>
          <a className="dropdown-item" href="/">Ventas</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Reclamos</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/">Mi Cuenta</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Buscar.." aria-label="Buscar"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="material-icons">
        search
        </i></button>
    </form>
  </div>
</nav>

        )
    }
}


export default Nav
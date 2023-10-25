import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuCoches() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="active">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/create" activeClassName="active">Crear Coche</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}



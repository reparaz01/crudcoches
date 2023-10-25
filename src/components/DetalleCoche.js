import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class DetalleCoche extends Component {
  state = {
    coche: {},
    statusGet: false,
  };

  getCoche = () => {
    var request = "api/Coches/FindCoche/" + this.props.idCoche;
    var url = Global.apiCoches + request;
    axios.get(url).then((response) => {
      this.setState({
        statusGet: true,
        coche: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.getCoche();
  };

  render() {
    return (
      <div>
        <h1>
          &nbsp; Detalles del Coche
          &nbsp; <NavLink to="/" className="btn btn-primary">
            Volver
          </NavLink>
        </h1>
        <hr />
        {this.state.statusGet === true && (
          <ul className="list-group">
            <li className="list-group-item">
              Id: {this.state.coche.idCoche}
            </li>
            <li className="list-group-item">
              Marca: {this.state.coche.marca}
            </li>
            <li className="list-group-item">
              Modelo: {this.state.coche.modelo}
            </li>
            <li className="list-group-item">
              Conductor: {this.state.coche.conductor}
            </li>
            <li className="list-group-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
              <img
                src={this.state.coche.imagen}
                alt="Imagen del Coche"
                style={{ maxWidth: '100%' }}
              />
            </li>
          </ul>
        )}
      </div>
    );
  }
}

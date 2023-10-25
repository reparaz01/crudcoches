import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';


export default class HomeDepartamentos extends Component {
  state = {
    coches: [],
    status: false
  };

  loadCoches = () => {
    var request = "api/coches";
    var url = Global.apiCoches + request;
    axios.get(url).then(response => {
      this.setState({
        coches: response.data,
        status: true
      });
    });
  };

  componentDidMount = () => {
    this.loadCoches();
  }

  render() {
    return (
      <div>
        <h2> Lista de Coches </h2>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th> Marca</th>
              <th> Modelo </th>
              <th> Detalles </th>
              <th> Eliminar </th>
              <th> Modificar </th>
            </tr>
          </thead>
          <tbody>
            {this.state.coches.map((coche, index) => (
              <tr key={index}>
                <td>{coche.marca}</td>
                <td>{coche.modelo}</td>
                <td>
                <NavLink to={"/details/" + coche.idCoche} className="btn btn-primary">Detalles </NavLink>
                  
                </td>
                <td>
                <NavLink className="btn btn-danger" to={"/delete/" + coche.idCoche}>Eliminar </NavLink>
                </td>

                <td>
                <NavLink className="btn btn-warning" to={"/update/" + coche.idCoche}>Modificar </NavLink>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
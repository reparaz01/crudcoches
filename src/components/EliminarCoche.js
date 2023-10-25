import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class EliminarCoche extends Component {
  state = {
    status: false,
  }

  deleteCoche = () => {
    var request = "api/coches/deletecoche/" + this.props.idCoche;
    var url = Global.apiCoches + request;
    console.log("elimimnar "+url);
    axios.delete(url).then(response => {
      this.setState({
        status: true
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/" />}
        <NavLink to="/">Volver </NavLink>
        <h1 style={{ color: "red" }}>
          ¿Eliminar Coche?: {this.props.idCoche}?
        </h1>
        <button className='btn btn-danger' onClick={() => this.deleteCoche()}>
          Delete
        </button>
      </div>
    )
  }
}
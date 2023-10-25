import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from './Global';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom'; // Import Navigate

export default class EliminarCoche extends Component {
  state = {
    status: false,
  }

  deleteCoche = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar el coche ${this.props.idCoche}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.performDelete();
      }
    });
  }

  performDelete = () => {
    var request = `api/coches/deletecoche/${this.props.idCoche}`;
    var url = Global.apiCoches + request;
    axios.delete(url).then((response) => {
      this.setState({
        status: true,
      });
      Swal.fire('Eliminado', 'El coche ha sido eliminado correctamente', 'success');
    });
  }

  render() {
    return (
      <div>
        {this.state.status && <Navigate to="/" />} {/* Use Navigate to go back to the home page */}
        <NavLink to="/">Volver</NavLink>
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

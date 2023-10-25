import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export default class ModificarCoche extends Component {

    state = {
        coche: {},
        statusGet : false,
        statusUpdate : false
    }

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();
 
    findCoche = () => {
        var request = "api/coches/findcoche/" + this.props.idCoche;
        var url = Global.apiCoches +  request;
        axios.get(url).then(response => {
            this.setState({
                statusGet : true,
                coche :response.data
            })
        })
    }

    componentDidMount = () =>{
        this.findCoche();
    }

    updateCoche = (e) =>{
        e.preventDefault();
        var idCoche = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;


        var data = {
            idCoche: idCoche,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }
        
        var request = "api/coches/updatecoche"
        var url = Global.apiCoches +  request;

        axios.put(url,data).then(response => {
            this.setState({
                statusUpdate : true
            })
        })
    }

  render() {
    return (
      <div>

        <NavLink to ="/"> Volver </NavLink>
        <h1> Actualizar Coche {this.props.idCoche} </h1>

        {
            this.state.statusUpdate == true &&
            (
                <Navigate to="/" />
            )
        }


        {
            this.state.statusGet == true &&
            (
                <form style={{ width: "500px", margin: "0", textAlign: "left", paddingLeft: "20px" }}>
                    <input type="hidden" className="form-control" value={this.state.coche.idCoche} ref={this.cajaId} />
                    <label>Marca</label>
                    <input type="text" className="form-control" defaultValue={this.state.coche.marca} ref={this.cajaMarca} />
                    <label>Modelo</label>
                    <input type="text" className="form-control" defaultValue={this.state.coche.modelo} ref={this.cajaModelo} />
                    <label>Conductor</label>
                    <input type="text" className="form-control" defaultValue={this.state.coche.conductor} ref={this.cajaConductor} />
                    <label>Imagen</label>
                    <input type="text" className="form-control" defaultValue={this.state.coche.imagen} ref={this.cajaImagen} />
                    <br></br>
                    <button onClick={this.updateCoche} className="btn btn-primary">
                        Modificar
                    </button>
                </form>


            )
        }

      </div>
    )
  }
}
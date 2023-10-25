import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';
import { Navigate } from 'react-router-dom'
export default class CrearCoche extends Component {

    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

 
 
    state = {
        status: false
    }
 
    insertCoche = (e) => {
        e.preventDefault();
        var idCoche = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

 
        var url = Global.apiCoches + "api/coches/insertcoche"
 
        var coche = {
            idCoche: idCoche,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }
 
        axios.post(url, coche).then(response => {
            this.setState({
                status: true
            })
        })
 
    }
 
    render() {
 
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>Crear Coche</h1>
 
 
                    <form onSubmit={this.handleSubmit} style={{ padding: "10px" }}>
                        <div className="form-group">
                            <label htmlFor="campo1">id Coche</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaId}
 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Marca</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaMarca}
 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="campo3">Modelo</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaModelo}
 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="campo4">Conductor</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaConductor}
 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Imagen</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaImagen}
 
                            />
                        </div>
 
                        <br></br>
 
                        <button type="submit" className="btn btn-primary" onClick={this.insertCoche}>Crear Coche</button>
                    </form>
 
 
                </div>
            )
        }
 
    }
}
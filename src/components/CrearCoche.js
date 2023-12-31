import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class CrearCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false,
        selectedImage: null, // Store the selected image as a file
    };

    handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            this.setState({ selectedImage: file });
        }
    };

    insertCoche = (e) => {
        e.preventDefault();
        const idCoche = parseInt(this.cajaId.current.value);
        const marca = this.cajaMarca.current.value;
        const modelo = this.cajaModelo.current.value;
        const conductor = this.cajaConductor.current.value;
        const imagen = this.state.selectedImage ? this.state.selectedImage.name : '';

        const url = Global.apiCoches + 'api/coches/insertcoche';

        const coche = {
            idCoche: idCoche,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: "C:\\Users\\Hp 800 G2\\Downloads\\"+imagen,
        };

        axios.post(url, coche).then((response) => {
            this.setState({
                status: true,
            });
        });
    };

    render() {
        if (this.state.status === true) {
            return <Navigate to="/" />;
        } else {
            return (
                <div>
                    <h1>Crear Coche</h1>
                    <form onSubmit={this.insertCoche} style={{ padding: '10px' }}>
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
                            <label htmlFor="campo5">Imagen</label>
                            <input
                                type="file"
                                className="form-control"
                                ref={this.cajaImagen}
                                onChange={this.handleImageChange}
                            />
                        </div>
                        {this.state.selectedImage && (
                            <img
                                src={URL.createObjectURL(this.state.selectedImage)}
                                alt="Selected"
                            />
                        )}
                        <br />
                        <button type="submit" className="btn btn-primary">
                            Crear Coche
                        </button>
                    </form>
                </div>
            );
        }
    }
}

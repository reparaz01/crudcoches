import React, { Component } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import MenuCoches from './MenuCoches';
import HomeCoches from './HomeCoches';
import DetalleCoche from './DetalleCoche';
import CrearCoche from './CrearCoche';
import EliminarCoche from './EliminarCoche';
import ModificarCoche from './ModificarCoche';

export default class Router extends Component {
  render() {

    function DetalleCocheElement() {
      var { idCoche} = useParams();
      return <DetalleCoche idCoche={idCoche}  />;
    }

    function EliminarCocheElement() {
      var { idCoche} = useParams();
      return <EliminarCoche idCoche={idCoche}  />;
    }


    function UpdateCocheElement() {
      var { idCoche} = useParams();
      return <ModificarCoche idCoche={idCoche}  />;
    }

    

    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<HomeCoches />} />
          <Route path="/details/:idCoche" element={<DetalleCocheElement />} />
          <Route path="/create" element={< CrearCoche/>} />
          <Route path="/delete/:idCoche" element={<EliminarCocheElement />} />
          <Route path="/update/:idCoche" element={<UpdateCocheElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
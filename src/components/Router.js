import React, { Component } from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import MenuCoches from './MenuCoches';
import HomeCoches from './HomeCoches';
import DetalleCoche from './DetalleCoche';
import CrearCoche from './CrearCoche';
import EliminarCoche from './EliminarCoche';

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

    return (
      <BrowserRouter>
        <MenuCoches />
        <Routes>
          <Route path="/" element={<HomeCoches />} />
          <Route path="/details/:idCoche" element={<DetalleCocheElement />} />
          <Route path="/create" element={< CrearCoche/>} />
          <Route path="/delete/:idCoche" element={<EliminarCocheElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
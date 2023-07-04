import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './header';
import Card from './card';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Header title="Galería de Imágenes con React" />
      <div className="card-container">
        <Card
          image="ruta-de-la-imagen.jpg"
          title="Título de la imagen 1"
          description="Descripción de la imagen 1"
        />
        <Card
          image="ruta-de-la-imagen.jpg"
          title="Título de la imagen 2"
          description="Descripción de la imagen 2"
        />
        {/* Agrega más componentes Card aquí */}
      </div>
      <Footer />
    </div>
  );
};

export default App;

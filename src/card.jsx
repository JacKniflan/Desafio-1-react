import React from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

function Card() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img src={image1} className="card-img-top" alt="Imagen 1" />
                        <div className="card-body">
                            <h5 className="card-title">Título de la imagen 1</h5>
                            <p className="card-text">Descripción de la imagen 1</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img src={image2} className="card-img-top" alt="Imagen 2" />
                        <div className="card-body">
                            <h5 className="card-title">Título de la imagen 2</h5>
                            <p className="card-text">Descripción de la imagen 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

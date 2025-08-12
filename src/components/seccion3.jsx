import React from 'react';
import './Seccion3.css';
import { useNavigate } from 'react-router-dom';
import {CuloDeArmando} from '../assets/italia2.jpg'
import {CuloDeArmando2} from '../assets/japon2.jpg'
import {CuloDeArmando3} from '../assets/mexico.jpg'

const Seccion3 = () => {
  const navigate = useNavigate();

  const manejarRedireccion = () => {
    navigate('/cotizador');
  };

  return (
    <section id='seccion3' className="oferta-section">
      <div className="oferta-content">
        <div className="oferta-left">
          <h2>Cotiza tu vuelo<br />¡Al mejor precio!</h2>
          <p>
            Explora múltiples destinos y compara precios con facilidad. 
            Encuentra vuelos ideales para tus próximas vacaciones o viajes de negocios.
          </p>
          <p>
            ¡Personaliza tu viaje, elige opciones extra y encuentra la mejor oferta disponible en segundos!
          </p>
          <div className="oferta-buttons">
        
            <button className="btn-purchase" onClick={manejarRedireccion}>
              COTIZAR AHORA
            </button>
          </div>
        </div>

        <div className="oferta-images">
          <img src={CuloDeArmando} alt="Destino 1" className="img img1" />
          <img src={CuloDeArmando2} alt="Destino 2" className="img img2" />
          <img src={CuloDeArmando3} alt="Destino 3" className="img img3" />
        </div>
      </div>
    </section>
  );
};

export default Seccion3;

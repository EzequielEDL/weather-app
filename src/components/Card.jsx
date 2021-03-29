import React from 'react';
import Style from '../style/Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({name, temp, description, img, onClose, id}) {
  return (
  		  <div className={Style.card}>

          <div className={Style.top}>
            <strong className={Style.strong}>{name}</strong>
            <div type='button' className={Style.btn_close} onClick={onClose}></div>
          </div>

          <span className={Style.span}>{description}</span>

          <div className={Style.temperature}>
            <div className={Style.number}>{Math.round(temp)}</div>
            <div className={Style.unit}>°C</div>
            <div className={Style.image_temp}>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img}/>
            </div>
          </div>
          
          <Link to={`/city/${id}`}>
            <div className={Style.btn_expand}>More</div>
          </Link>

        </div>

  		)
};

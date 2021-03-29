import React from "react";
import Style from '../style/City.module.css';

import weather from '../img/icon/icon_weather.png';
import min from '../img/icon/icon_min.png';
import max from '../img/icon/icon_max.png';
import wind from '../img/icon/icon_wind.png';
import cloud from '../img/icon/icon_cloud.png';
import latitud from '../img/icon/icon_latitud.png';
import longitud from '../img/icon/icon_longitud.png';

export default function Ciudad({city}) {
    console.log(weather.path);

    if (!city) {
        return (<div>No city</div>)
    }

    return (
        <div className="ciudad">


            <div className={Style.container}>
                <h1 className={Style.h1}>{city.name}</h1>

                <div>
                    <hr className={Style.hr}/>
                    <h3 className={Style.title}>Temperature</h3>
                    <div className={Style.container_info}>
                        <div className={Style.info}>
                            <div>
                                <img src={min} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>Minimum temperature of {city.min} ºC</div>
                        </div>

                        <div className={Style.info}>
                            <div>
                                <img src={max} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>Maximum temperature of {city.max} ºC</div>
                        </div>
                    </div>
                    <hr className={Style.hr}/>
                    <h3 className={Style.title}>Sky</h3>
                    <div className={Style.container_info}>
                        <div className={Style.info}>
                            <div>
                                <img src={weather} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>The weather is {city.weather}</div>
                        </div>

                        <div className={Style.info}>
                            <div>
                                <img src={wind} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>Speed wind of {city.wind} Km/h</div>
                        </div>

                        <div className={Style.info}>
                            <div>
                                <img src={cloud} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>With {city.clouds} amount of clouds</div>
                        </div>
                    </div>
                    <hr className={Style.hr}/>
                    <h3 className={Style.title}>Coordinates</h3>
                    <div className={Style.container_info}>
                        <div className={Style.info}>
                            <div>
                                <img src={latitud} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>A latitude of {city.latitud}º</div>
                        </div>

                        <div className={Style.info}>
                            <div>
                                <img src={longitud} className={Style.icon} alt={"icon"}/>
                            </div>
                            <div className={Style.subtitle}>A length of {city.longitud}º</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
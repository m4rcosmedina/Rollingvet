//import {FontAwesomelcon} from '@fortawesome/react-fontawesome';
//import {faMapMarkerAlt, faThermometerHalf, faWind, faCloudSun} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Weather = ({weather})=> {
    const clima={
        city:"-",
        temp:"0",
        sky:"-",
        wind:"0"
    };
    if(weather.city!==undefined){
        clima.city=weather.city;
        clima.temp=weather.temp;
        clima.sky=weather.sky;
        clima.wind=weather.wind;
    }

    return(
        <div className='bg-dark text-white container-fluid d-flex justify-content-evenly'>
            <div>
                {weather.city}
            </div>
            <div>
                {Math.round(weather.temp)}°
            </div>
            <div>
                {weather.sky}
            </div>
            <div>
                {Math.round(weather.wind)} km/h 
            </div>
        </div>
    
    );
};

export default Weather;
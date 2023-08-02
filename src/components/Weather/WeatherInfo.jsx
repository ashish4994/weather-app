import React from 'react';
import Card from 'react-bootstrap/Card';
import "./../common/styles.css";
import feels from "./../../assets/feels.png";
import humidity from "./../../assets/humidity.png";
import wind from "./../../assets/wind.png";
import _ from 'lodash';
function WeatherInfo(props) {

    const ctof = (temp)=>{
        let ftemp = (temp * (9 / 5)) + 32;
        return Math.ceil(ftemp);
    }
  
    return (
        <div className ="weather-info">
        <div className='d-flex align-items-center justify-content-center'>
        <Card style={{ width: '18rem' }}>
        <Card.Body className = "card-body">
            <Card.Title>{`${props.weatherData.name},${props.weatherData.sys.country}`}</Card.Title>
            <h6>{_.camelCase(props.weatherData.weather[0].description)}</h6>
            <hr />
            <h1> {props.temptype == 'celcius' ? `${Math.ceil(props.weatherData.main.temp)} °C`: `${ctof(props.weatherData.main.temp)} °F`} </h1>
            <hr />           
            <div class ="d-flex gap-3 justify-content-center">
             <h6>High: {props.temptype == 'celcius' ? `${props.weatherData.main.temp_max} °C`: `${ctof(props.weatherData.main.temp_max)} °F`}</h6>
             <h6>Low: {props.temptype == 'celcius' ? `${props.weatherData.main.temp_min} °C`: `${ctof(props.weatherData.main.temp_min)} °F`}</h6>
            </div>
        </Card.Body>
        </Card>
        </div>

        <div className='card-items'>  
        <div>
            <img src={feels} className='card-items-image'></img>
            <h5>Feels like</h5>
            <h6>{props.temptype == 'celcius' ? `${props.weatherData.main.feels_like} °C`: `${ctof(props.weatherData.main.feels_like)} °F`}</h6>
            </div>  
            <div>
            <img src={humidity} className='card-items-image'></img>
            <h5>Humidity</h5>
            <h6>{props.weatherData.main.humidity} %</h6>
            </div>
            <div>
            <img src={wind} className='card-items-image'></img>
            <h5>Wind</h5>
            <h6>{props.weatherData.wind.speed} km/hr</h6>
            </div>
        </div>
        </div>
    );
}

export default WeatherInfo;
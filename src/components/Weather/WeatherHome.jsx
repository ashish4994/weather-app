import React, { useState } from "react";
import "./../common/styles.css";
import WeatherInfo from "./WeatherInfo";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import utils from "./utils";

function WeatherHome() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [tempType, settempType] = useState('celcius');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city == "") {
      alert("Enter city name");
      return;
    }

    //Api call to get weather data
    let cityData = await utils.getWeatherDataFetch(city);
    if (cityData.cod == '200') {
    settempType('celcius')
      setData(cityData);
    }
    setCity("");
  };

  const fbuttonClickHandler = () =>{
    settempType('farenheit');
  }

  const cbuttonClickHandler = () =>{
    settempType('celcius');
  }

  return (
    <div className="weather-home">
      <h1>Weather App</h1>
      <div class ="d-flex justify-content-center gap-3">
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Enter city name"
          className="me-2 w-auto"
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit" variant="success">
          Search
        </Button>
      </Form>

      <div
        class="btn-group btn-group-sm"
        role="group"
        aria-label="Basic example"
      >
        <button type="button" class="btn btn-warning"
        onClick={cbuttonClickHandler}>
        °C
        </button>

        <button type="button" class="btn btn-info"
        onClick={fbuttonClickHandler}>
        °F
        </button>
      </div>
      </div>

      {data != null ? <WeatherInfo weatherData={data} temptype={tempType} /> : null}
    </div>
  );
}

export default WeatherHome;

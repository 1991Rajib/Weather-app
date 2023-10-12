import './App.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBody from './component/WeatherBody';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  // const [lat, setLat] = useState(null);
  // const [long, setLong] = useState(null);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState({});

  const setFormValue = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
    console.log(city);
  };


  // useEffect(() => {
  //   let longitude;
  //   let latitude;
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     latitude = position.coords.latitude
  //     longitude = position.coords.longitude
  //     setLat(latitude);
  //     setLong(longitude);
  //   });
  // }, [])

  // useEffect(() => {
  //   const getWeather = async () => {
  //     try {
  //       //const response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
  //       const response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
  //       const data = await response.json();
  //       console.log(data);
  //       setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   if (lat && long) { getWeather() }

  // }, [lat, long]);



  const handleCity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city.city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
      if (response.status !== 404) {
        const data = await response.json();
        console.log(data);
        setData(data);
        setError("");
      }
      else {
        setData(null);
        setError("No city found. Please choose another one.");
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className="vh-100">
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-7 col-xl-5">
            <form onSubmit={handleCity} className='mb-4'>
              <Form.Label htmlFor="city">City</Form.Label>
              <div className='d-flex'>
                <Form.Control
                  name='city'
                  type="text"
                  id="city"
                  aria-describedby="city"
                  onChange={setFormValue}
                  className='rounded-0'
                />
                <Button className='rounded-0' variant="primary" type="submit">
                  Submit
                </Button>
              </div>
              <Form.Text id="passwordHelpBlock" muted>
                Please enter city name
              </Form.Text>
            </form>
            {data && (<><WeatherBody data={data} /></>)}
            <p>{error}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

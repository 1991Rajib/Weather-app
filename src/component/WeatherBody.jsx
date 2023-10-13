import React, { useEffect, useState } from 'react'

const WeatherBody = ({ data }) => {

  const[wdata,setWdata] = useState({})
  let obj ={}
  const weatherData = () => {
    data.weather.forEach((item) => {
      obj = {
        description: item.description,
        icon: item.icon,
        main: item.main
      }
    })
    setWdata(obj)
  }

  useEffect(() => {
    weatherData()
  },[])

  return (


            <div id="wrapper-bg" className="card text-white bg-image shadow-4-strong">

              {/* <!-- Main current data --> */}
              <div className="card-header p-4 border-0">
                <div className="text-center mb-3">
                  <small className="mb-1" id="wrapper-name">{data.sys.country}</small>
                  <p className="h2 mb-1" id="wrapper-name">{data.name}</p>
                  <p className="display-1 mb-1" id="wrapper-temp">{data.main?.temp}<sup><small>&deg;c</small></sup></p>
                  <p className="mb-1" id="wrapper-description"><img src={`https://openweathermap.org/img/wn/${wdata?.icon}.png`} alt=""/>{wdata?.description}</p>
                  <span className="">Feels Like: <span id="wrapper-pressure">{data.main?.feels_like}<sup><small>&deg;c</small></sup></span></span>
                  <span className="mx-2">|</span>
                  <span className="">Pressure: <span id="wrapper-pressure">{data.main?.pressure}</span></span>
                  <span className="mx-2">|</span>
                  <span className="">Humidity: <span id="wrapper-humidity">{data.main?.humidity}</span></span>
                </div>
              </div>

              {/* <!-- Hourly forecast --> */}
              <div className="card-body p-4 border-top border-bottom mb-2">
                <div className="row text-center">
                  <div className="col-6">
                    <strong className="d-block mb-2">Sunrise</strong>
                    {/* <img id="wrapper-icon-hour-now" src="" className="" alt="" /> */}
                    <strong className="d-block" id="wrapper-hour-now">{ new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</strong>
                  </div>

                  <div className="col-6">
                    <strong className="d-block mb-2" id="wrapper-time1">Sunset</strong>
                    {/* <img id="wrapper-icon-hour1" src="" className="" alt="" /> */}
                    <strong className="d-block" id="wrapper-hour1">{ new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</strong>
                  </div>

                  {/* <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time2"></strong>
                    <img id="wrapper-icon-hour2" src="" className="" alt="" />
                    <strong className="d-block" id="wrapper-hour2"></strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time3"></strong>
                    <img id="wrapper-icon-hour3" src="" className="" alt="" />
                    <strong className="d-block" id="wrapper-hour3"></strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time4"></strong>
                    <img id="wrapper-icon-hour4" src="" className="" alt="" />
                    <strong className="d-block" id="wrapper-hour4"></strong>
                  </div>

                  <div className="col-2">
                    <strong className="d-block mb-2" id="wrapper-time5"></strong>
                    <img id="wrapper-icon-hour5" src="" className="" alt="" />
                    <strong className="d-block" id="wrapper-hour5"></strong>
                  </div> */}
                </div>
              </div>

              {/* <!-- Daily forecast --> */}
              {/* <div className="card-body px-5">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <strong>Today</strong>
                  </div>

                  <div className="col-lg-2 text-center">
                    <img id="wrapper-icon-today" src="" className="w-100" alt="" />
                  </div>

                  <div className="col-lg-4 text-end">
                    <span id="wrapper-forecast-temp-today"></span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <strong>Tomorrow</strong>
                  </div>

                  <div className="col-lg-2 text-center">
                    <img id="wrapper-icon-tomorrow" src="" className="w-100" alt="" />
                  </div>

                  <div className="col-lg-4 text-end">
                    <span id="wrapper-forecast-temp-tomorrow">28</span>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <strong>Day after tomorrow</strong>
                  </div>

                  <div className="col-lg-2 text-center">
                    <img id="wrapper-icon-dAT" src="" className="w-100" alt="" />
                  </div>

                  <div className="col-lg-4 text-end">
                    <span id="wrapper-forecast-temp-dAT">28</span>
                  </div>
                </div>
              </div> */}
            </div>


  )
}

export default WeatherBody
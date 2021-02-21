import { useState, useEffect } from "react"
import './index.css';
import Header from "./components/Header";
import Temps from "./components/Temps";
import Footer from "./components/Footer"

const App = () => {

  // temps for the main body
  const [tempObj, setTempObj] = useState({
    temp: "...",
    temp_min: "...",
    temp_max: "..."    
  })

  // info array
  const [infoArray, setInfoArray]  = useState([])

  // weather icon for the header image
  const [headerIcon, setIcon] = useState()
  const [headerText, setHeaderText] = useState("Please allow location")
  
  // true for celcius or false for fareignheight
  const [unitCelcius, setUnitCelcius] = useState(true)

  // true to show, false to hide
  const [infoPane, setInfoPane] = useState(false)

  // on startup fetch weather
  useEffect(() => {
    const getWeather = async () => {
      try {
        // first get location
        getLocation()
      } catch (error) {
        console.log(error)
      }
    }
    getWeather()

    

  },[])

  const getLocation = () => {
    // if geolocation supported
    if (navigator.geolocation) {
      // pass location info to showposition
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
      setHeaderText("Browser not supported")
    }
  }

  const showPosition = (pos) => {
    // extract coords and pass to the fetch function
    fetchWeather(pos.coords.latitude,pos.coords.longitude)
  }

  // method for fethcing the weather
  const fetchWeather = async (lat, lon) => {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`)
    const data = await res.json()
    console.log(data)
    // set temp object container the temperatures
    setTempObj(data.main)
    // set icon url
    setIcon(data.weather[0].icon)
    // set the locaiton name
    setHeaderText(`${data.name}, ${data.sys.country}`)

    // extrac date from unix times and convert to a time
    const sunriseDate = new Date(data.sys.sunrise*1000)
    const sunriseMinutes = "0"+sunriseDate.getMinutes()
    const sunsetDate = new Date(data.sys.sunset*1000)
    const sunsetMinutes = "0"+sunsetDate.getMinutes()
    const sunrise = `${sunriseDate.getHours()}:${sunriseMinutes.substr(-2)}`
    const sunset = `${sunsetDate.getHours()}:${sunsetMinutes.substr(-2)}`
    // set the info array
    setInfoArray([ 
      [`visibility: ${data.visibility/1000} mi`],
      [`humidity: ${data.main.humidity}%`],
      [`pressure: ${data.main.pressure} hPa`],
      [`wind speed: ${data.wind.speed} mph`],
      [`sunrise: ${sunrise}`],
      [`sunset: ${sunset}`]
    ])
  }

  const toggleUnit = () => {
    setUnitCelcius(!unitCelcius)
  }

  const toggleInfo = () => {
    setInfoPane(!infoPane)
  }

  return (
    <div className="app">
      <Header headerIcon={headerIcon} 
        headerText={headerText} 
        toggleUnit={toggleUnit}/>
      <Temps tempObj={tempObj} 
        unitCelcius={unitCelcius} />
      <Footer infoArray={infoArray} 
        infoPane={infoPane} 
        toggleInfo={toggleInfo}/>
    </div>
  );
}

export default App;

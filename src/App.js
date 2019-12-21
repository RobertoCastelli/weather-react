import React, { useState } from 'react';
import Header from './Header'
import Form from './Form'
import Main from './Main'
import Footer from './Footer'

function App() {
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('Milan')

  const api = 'https://api.openweathermap.org/data/2.5/weather?q='
  const key = '95e94eae366bd6d895f5424258602103'

  const fetchData = async e  => {
      e.preventDefault() 
      const response = await fetch(`${api}${city}&appid=${key}`)
      const data = await response.json()
      console.log(data)
      setWeather({
        city: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        temperature: Math.floor(data.main.temp - 273,15),
        description: data.weather[0].description,
        latitude: data.coord.lat,
        longitude: data.coord.lon      
      })
  }

  return (
    <div>
      <Header />
      <Form 
        clearText={e => e.target.value = ''}
        getWeather={fetchData} 
        getCity={event => setCity(event.target.value)} 
        />
      <Main 
        city={weather.city}
        icon={weather.icon}
        temperature={weather.temperature}
        description={weather.description}
        latitude={weather.latitude}
        longitude={weather.longitude}
      />
      <Footer />
    </div>
  )
}

export default App;

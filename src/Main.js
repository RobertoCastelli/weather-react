import React, { useState, useEffect} from 'react'

function Main() {

    const api = 'http://api.openweathermap.org/data/2.5/weather?q='
    const key = '95e94eae366bd6d895f5424258602103'
    const [temperature, setTemperature] = useState('')
    const [description, setDescription] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [icon, setIcon] = useState('')
    const [city, setCity] = useState('Leeds')



    const handleChange = e => {
        console.log(city) 
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(city) 
    } 

    useEffect(() => {
            const fetchData = async (cityName) => {
            const response = await fetch(`${api}${cityName}&appid=${key}`)
            const data = await response.json()
            const iconImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            console.log(data)
            setCity(data.name)
            setIcon(iconImage)
            setTemperature(Math.floor(data.main.temp - 273,15))
            setDescription(data.weather[0].description)
            setLongitude(data.coord.lon)
            setLatitude(data.coord.lat)
        }
            fetchData(city)
        }, []) 

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="console" >
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder=" search city for weather info"/>
                <button>SEARCH</button>
            </form>
            <div className="info">
                <h2>{city}</h2>
                <img src={icon} alt="meteoImage" />
                <h2>{temperature}&deg;</h2>
                <p>{description}</p>
                <p>lat {latitude} | lon {longitude}</p>
            </div>
        </div>
    )
}

export default Main

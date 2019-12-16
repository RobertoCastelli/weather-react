import React, { useState, useEffect } from 'react'

function Main() {

    const api = 'http://api.openweathermap.org/data/2.5/weather?q='
    const key = '95e94eae366bd6d895f5424258602103'
    const [city, setCity] = useState('Bordighera')
    const [temperature, setTemperature] = useState('')
    const [description, setDescription] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [icon, setIcon] = useState('')
   
    const handleChange = e => {    
        e.preventDefault()
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log('ciao')
    }
    

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${api}${city}&appid=${key}`)
            const data = await response.json()
            const iconImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            console.log(data)
            setIcon(iconImage)
            setTemperature(data.main.temp)
            setDescription(data.weather[0].description)
            setLongitude(data.coord.lon)
            setLatitude(data.coord.lat)
        }
            fetchData()
        }, [])

    return (
        <div onSubmit={handleSubmit} className="container">
            <div className="console">
                <input onChange={handleChange} type="text" placeholder=" search city for weather info"/>
                <button >SEARCH</button>
            </div>
            <div className="info">
                <h2>{city}</h2>
                <img src={icon} alt="meteoImage" />
                <h2>{(temperature-273,15)}&deg;</h2>
                <p>{description}</p>
                <p>lat {latitude} | lon {longitude}</p>
            </div>
        </div>
    )
}

export default Main

import React from 'react'

function Main(props) {

    return (
        <div    
        className="info">
            <h2>{props.city}</h2>
            <img src={props.icon} alt="meteoImage" />
            <h2>{props.temperature}&deg;</h2>
            <p>{props.description}</p>
            <p>lat {props.latitude}  -  lon {props.longitude}</p>
        </div>
    )
}

export default Main

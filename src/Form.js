import React from 'react'

function Form(props) {

    const handleVisibility = () => {
        let info = document.querySelectorAll('.info')
        info.forEach(element => {
            element.classList.remove('info')
        });
    }

    return (
        <form 
            onSubmit={props.getWeather}
            className="console">
            <input 
                onFocus={props.clearText}
                onChange={props.getCity}
                type="text"
                placeholder=" search city for weather info"
            />
            <button onClick={handleVisibility}>SEARCH</button>
        </form>

    )
}

export default Form

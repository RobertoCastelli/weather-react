import React from 'react'

function Form(props) {
    return (
        <form 
            onSubmit={props.getWeather}
            onClick={props.isVisible} 
            className="console">
            <input 
                onFocus={props.clearText}
                onChange={props.getCity}
                type="text"
                placeholder=" search city for weather info"
            />
            <button>SEARCH</button>
        </form>

    )
}

export default Form

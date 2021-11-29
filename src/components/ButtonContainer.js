import React from "react"

const ButtonContainer = (props) => {
    const lightsStateHandler = (newState) => {
        props.setLightsState(newState)
    }

    return (
        <article className="buttonContainer">
            <button className="redLightButton" onClick={() => lightsStateHandler(1)}>Stop</button>
            <button className="yellowLightButton" onClick={() => lightsStateHandler(2)}>Wait</button>
            <button className="greenLightButton" onClick={() => lightsStateHandler(3)}>Ready</button>
        </article>
    )
}

export default ButtonContainer
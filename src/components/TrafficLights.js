import React from "react"

const TrafficLights = (props) => {
    return (
        <article className="trafficLights">
            <div style={{background: props.lightsState === 1 ? "red" : "rgba(255, 0, 0, 0.1)"}}></div>
            <div style={{background: props.lightsState === 2 ? "yellow" : "rgba(255, 255, 0, 0.1)"}}></div>
            <div style={{background: props.lightsState === 3 ? "green" : "rgba(0, 255, 0, 0.1)"}}></div>
        </article>
    )
}

export default TrafficLights
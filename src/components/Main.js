import React from "react"
import TrafficLights from "./TrafficLights"
import ButtonContainer from "./ButtonContainer"

const Main = () => {
    return (
        <main style={{backgroundImage : "url('./assets/fondo.jpeg')"}}>
            <section className="container">
                <TrafficLights/>
                <ButtonContainer/>
            </section>
        </main>
    )
}

export default Main
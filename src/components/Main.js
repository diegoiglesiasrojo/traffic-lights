import React, {useState} from "react"
import TrafficLights from "./TrafficLights"
import ButtonContainer from "./ButtonContainer"

const Main = () => {
    const [lightsState, setLightsState] = useState(0)

    return (
        <main style={{backgroundImage : "url('./assets/fondo.jpeg')"}}>
            <section className="container">
                <TrafficLights lightsState={lightsState}/>
                <ButtonContainer setLightsState={setLightsState}/>
            </section>
        </main>
    )
}

export default Main
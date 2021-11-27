import React from "react"

const Main = () => {
    return (
        <main style={{backgroundImage : "url('./assets/fondo.jpeg')"}}>
            <section className="container">
                <article className="trafficLights">
                    <div className="redLight"></div>
                    <div className="yellowLight"></div>
                    <div className="greenLight"></div>
                </article>
                <article className="buttonContainer">
                    <button className="redLightButton">Stop</button>
                    <button className="yellowLightButton">Wait</button>
                    <button className="greenLightButton">Ready</button>
                </article>
            </section>
        </main>
    )
}

export default Main
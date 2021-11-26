import './App.css'
import React from "react"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


function App() {
  return (
    <>
      <Header/>
      <main className="App">
        <p>traffic lights</p>
      </main>
      <Footer/>
    </>
  )
}

export default App
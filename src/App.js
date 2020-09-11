import React from 'react'
import Header from './Components/Common/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Common/Footer'
import Contact from './Components/Contact/Contact'
import './App.css'
import './reset.css'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
    return (
        <div className="App">

            <Header />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />

        </div>
    )
}

export default App

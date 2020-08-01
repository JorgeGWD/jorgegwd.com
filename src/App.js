import React from 'react';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Common/Footer';
import './App.css';
import './reset.css';

function App() {
    return (
        <div className="App">

            <Header />
            <Home />
            <About />
            <Skills />
            <Contact />
            <Footer />

        </div>
    );
}

export default App;

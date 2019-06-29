import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <About />

    </div>
  );
}

export default App;

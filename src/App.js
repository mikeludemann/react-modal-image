import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalImage from './components/modal-image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <ModalImage 
          id="Mario" 
          url={require("./assets/mario-kart-tour.png")} 
          alttext="Mario Kart"
        >
        </ModalImage>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/navbar'
import BackgroundImagePage from './Components/background'

function App() {
  return (
    <div className="App">
      <BackgroundImagePage />
      <header className="App-header">
      <Navbar />
      </header>
    </div>
  );
}

export default App;

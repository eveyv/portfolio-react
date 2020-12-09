import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Navbar from './Components/navbar'
import BackgroundImagePage from './Components/background'

class App extends Component {
    constructor(props) {
      super(props)
   
      this.state = {
        data: null,
      };
    }
   
    componentDidMount() {
      fetch('../public.websiteData')
        .then(response => response.json())
        .then(data => this.setState({ data }));
      
    }

  render() { 

    return (
    <div className="App">
      <BackgroundImagePage />
      <header className="App-header">
      <Navbar />
      </header>
    </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Navbar from './Components/navbar'
import BackgroundImagePage from './Components/background';
import About from './Components/about';

class App extends Component {
    constructor(props) {
      super(props)
   
      this.state = {
        resumeData: {},
      };
    }
   
    componentDidMount() {
      fetch('/websiteData.json')
        .then(data => data.json())
        .then(data => this.setState({ resumeData: data }));
    }

  render() { 

    return (
    <div className="App">
      <BackgroundImagePage />
      <header className="App-header">
      <About data ={this.state.resumeData.main} />
      <Navbar />
      </header>
    </div>
    );
  }
}

export default App;

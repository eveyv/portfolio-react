import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome';
import Projects from './Components/Projects'
import TechBio from './Components/TechBio';
import Footer from './Components/Footer';

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
      <header>
      <Navbar data ={this.state.resumeData.main} />
      </header>
      <Welcome data ={this.state.resumeData.main} />
      <Projects data ={this.state.resumeData.portfolio} />
      <TechBio data ={this.state.resumeData.resume} />
      <Footer  data={this.state.resumeData.main} />
    </div>
    );
  }
}

export default App;

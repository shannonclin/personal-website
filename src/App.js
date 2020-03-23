import React, { Component } from 'react';
import Experience from './Experience.js';
import resume from '../public/ShannonLin_Resume.pdf';
import './App.css';

class App extends Component {
  render() {
    const linkedinURL = "https://linkedin.com/in/shannonclin";
    return (
      <div className="App">
        <div className="App-upper">
          <div className="App-header">
            Hi, I'm Shannon!
          </div>
        </div>
        <div className="App-lower">
          <div className="App-tagline">
            I'm a software engineer based in New York City.
          </div>
          <div className="App-actions">
            [<a href={resume} target="_blank">
              Resume
            </a>][
            <a href={linkedinURL} target="_blank">
              LinkedIn
            </a>]
          </div>
        </div>
      </div>
    );
  }
}

export default App;

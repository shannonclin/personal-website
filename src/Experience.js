import React, { Component } from 'react';
import resume from '../public/ShannonLin_Resume.pdf'
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="Experience-entry">
          <div className="Experience-title">
            <b>Oscar Health</b>, October 2018 - <b>Present</b>
          </div>
          <div className="Experience-description">
            Building an in-house claims adjudication system.
          </div>
        </div>
        <div className="Experience-entry">
          <div className="Experience-title">
            <b>Airbnb</b>, June 2016 - August 2018
          </div>
          <div className="Experience-description">
            Restaurants, Experiences, Payments
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

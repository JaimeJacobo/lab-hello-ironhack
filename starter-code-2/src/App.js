import React, { Component } from 'react';
import './App.css';
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="blueBackground screen">
          <div id="header" className="smallHeight flexSpaceBetween padding">
            <img src="images/ironhack-logo.svg" alt=""/>
            <img src="images/menu-top.svg" alt=""/>
          </div>
          <div id="mainContent" className="padding">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
          <button id="button">Awesome!</button>
        </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>

      </div>
    );
  }
}

export default App;

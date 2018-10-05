import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Account from './components/Account';
import logo from './logo.svg';
import './App.css';
import LeftPanel from './components/LeftPanel';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <LeftPanel />
        
        <div id="content">
          <Header />
          <hr/>
          <Account/>
        </div>
      </div>
    );
  }
}

export default App;

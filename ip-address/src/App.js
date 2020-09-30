import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Search from './components/search'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>IP Address Tracker</h1>
        <Search/>
      </div>
    </Router>
  );
}

export default App;

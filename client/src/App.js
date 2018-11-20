import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListsContainer from './components/ListsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Manowar Forever!</h1>
          <h2 className="Metal">The Gods Made Heavy Metal, and it's never gonna die!</h2>

        </header>
        <ListsContainer />
      </div>
    );
  }
}

export default App;

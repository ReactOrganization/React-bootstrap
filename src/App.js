import React, { Component } from 'react';
import './App.css';
import { ProgressBar } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressBar striped bsStyle="success" now={100} />
        <h2>this is a section with componentes <br /> from reac-bootstrap npm package</h2>
        <ProgressBar striped bsStyle="success" now={100} />
        <ProgressBar active now={77} />;
        <h2>this is a section build with bootstrap <br /> and converted to components</h2>
        <ProgressBar active now={77} />;
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { getFarmsById, getAllFarms } from './lib/airtable/request';
import FarmCard from './components/FarmCard';
import Airtable from 'airtable';
// import { render } from '@testing-library/react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      farms: [],
      harvestLogs: []
    }
  }

  async componentDidMount() {
    const request = await getAllFarms();
    this.setState({ farms: request })
    console.log(request);
  }


  render() {
    return (
      <div className="App">
        <h1>to-ma-to</h1>
      </div>
    );
  }
}

export default App;

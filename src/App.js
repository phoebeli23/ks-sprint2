import React from 'react';
import './App.css';
import { getAllFarms } from './lib/airtable/request';
import FarmCard from 'components/FarmCard';

function App() {

  componentDidMount() {
    const farms = await getAllFarms();
    console.log(farms);
  }
  
  return (
    <div className="App">
      <h1>to-ma-to</h1>
    </div>
  );
}

export default App;

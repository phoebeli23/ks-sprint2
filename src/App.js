import React, { useState } from 'react';
import './App.css';
import { getFarmsById, getAllFarms, getAllHarvestLogs } from './lib/airtable/request';
import FarmCard from './components/FarmCard/FarmCard';
import HarvestLogCard from './components/HarvestLogCard/HarvestLogCard';
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
    const farmRequest = await getAllFarms();
    const harvestRequest = await getAllHarvestLogs();

    // const harvestList = [];
    // for (const farm of farmRequest) {
    //   const result = await getHarvestLogsByIds(farm.harvest_logIds);
    //   harvestList.push(result);
    // }

    this.setState({ 
      farms: farmRequest, 
      harvestLogs: harvestRequest 
    });
    console.log(farmRequest);
    console.log(harvestRequest);
  }

  render() {
    return (
      <div className="App">
        <h1>Farms and Harvest Logs</h1>
        
        <div className="farm-cards">
          {
            this.state.farms.map(farm => (
              <FarmCard
                id={farm.id}
                name={farm.name}
                harvestLogIds={farm.harvest_logIds}
                contact={farm.contact}
                address={farm.address}
              />
            ))
          }
        </div>

        <div className="harvest-log-cards">
          {
            this.state.harvestLogs.map(log => (
              <HarvestLogCard
                id={log.id}
                farmId={log.farm_idId}
                plantingId={log.planting_idId}
                cropIds={log.crop_iIds}
              />
            ))
          }
        </div>

      </div>
    );
  }
}

export default App;

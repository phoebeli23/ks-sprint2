import React from 'react';
import './HarvestLogCard.css';

const HarvestLogCard = ({ id, farmId, plantingId, cropIds }) => {

    return (
        <div className='harvest-log-card' id={id}>
            <h3 className='harvest-log-card__header'>Harvest Log</h3>
            <div className='harvest-log-card__body'>
                <div>{`Farm ID: ${farmId}`}</div>
                <div>{`Planting ID: ${plantingId}`}</div>
                <div>{`Crop IDs: ${cropIds}`}</div>
            </div>
        </div>
    );
}
 
export default HarvestLogCard;
import React from 'react';
import './FarmCard.css';

const FarmCard = ({ id, name, contact, address, harvestLogIds }) => {

    return (
        <div className='farm-card' id={id}>
            <h3 className='farm-card__header'>{name}</h3>
            <div className='farm-card__body'>
                <div>{`Contact: ${contact}`}</div>
                <div>{`Address: ${address}`}</div>
                <div>{`Harvest Log IDs: ${harvestLogIds}`}</div>
            </div>
        </div>
    );
}
 
export default FarmCard;
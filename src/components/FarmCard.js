import React from 'react';

const FarmCard = ({ id, name, harvestLogs }) => {
    return (
        <div className='farm-card' id={id}>
            <h3>{name}</h3>

        </div>
    );
}
 
export default FarmCard;
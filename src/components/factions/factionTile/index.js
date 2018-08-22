import React from 'react';

const FactionTile = (props) => {
  return(
    <div>
        <span className='factionName'>{props.faction.name}</span>
        <img className='faction Image'
          src={props.faction.image}
          alt={props.faction.name}
        />
    </div>
  )
}

export default FactionTile;

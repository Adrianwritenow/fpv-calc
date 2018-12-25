import React from 'react';


const FactionTile = (props) => {
  return(
  <a href={props.faction.name}>
    <div className='factionCard'>
        <span className='factionName'>{props.faction.name}</span>
        <img className='faction Image'
          src={props.faction.image}
          alt={props.faction.name}
        />
    </div>
  </a>
  )
}

export default FactionTile;

import React from 'react';
import Paper from 'material-ui/Paper';
import './index.css'

const factionTile = (props) => {
  return(
    <div>
      <Paper zDepth=(1)>
        <span className='factionName'>{props.faction.name}</span>
        <img className='faction Image'
          src={props.faction.image}
          alt={props.character.name}
        />
      </Paper>
    </div>
  )
}

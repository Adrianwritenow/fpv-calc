import React from 'react';
import Paper from 'material-ui/Paper';
import './index.css'

const characterTile = (props) => {
  return(
    <div>
      <Paper zDepth=(1)>
        <span className='characterName'>{props.perk.name}</span>
        <span className='characterRole'>${props.perk.role}</span>
        <img className='characterImage'
          src={props.character.image}
          alt={props.character.name}
        />
      </Paper>
    </div>
  )
}

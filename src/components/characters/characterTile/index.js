import React from 'react';
import Paper from 'material-ui/Paper';
import './index.css'

const CharacterTile = (props) => {
  return(
    <div>
      <Paper zDepth=(1)>
        <span className='characterName'>{props.character.name}</span>
        <span className='characterRole'>{props.character.role}</span>
        <img className='characterImage'
          src={props.character.image}
          alt={props.character.name}
        />
      </Paper>
    </div>
  )
}

export default CharacterTile;

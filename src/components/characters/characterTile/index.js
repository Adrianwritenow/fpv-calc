import React from 'react';

const CharacterTile = (props) => {

  return(
    <div>
        <span className='characterName'>{props.character.name}</span>
        <span className='characterRole'>{props.character.role}</span>
        <img className='characterImage'
          src={props.character.image}
          alt={props.character.name}
        />
    </div>
  )
}

export default CharacterTile;

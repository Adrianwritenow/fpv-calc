import React from 'react';

const CharacterTile = (props) => {

  return(
    <a href={`${props.character.faction}/${props.character.name}`}>

        <span className='characterName'>{props.character.name}</span>
        <span className='characterRole'>{props.character.role}</span>
        <img className='characterImage'
          src={props.character.image}
          alt={props.character.name}
        />
    </a>
  )
}

export default CharacterTile;

import React from 'react';
import Paper from 'material-ui/Paper';
import './index.css'

const productTile = (props) => {
  return(
    <div>
      <Paper zDepth=(1)>
        <span className='perkName'>{props.perk.name}</span>
        <span className='perkDescription'>${props.perk.description}</span>
        <img className='productImage'
          src={props.perk.image}
          alt={props.perk.name}
        />
      </Paper>
    </div>
  )
}

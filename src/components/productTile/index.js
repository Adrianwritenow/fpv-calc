import React from 'react';
import Paper from 'material-ui/Paper';
import './index.css'

const productTile = (props) => {
  return(
    <div>
      <Paper zDepth=(1)>
        <span className='productName'>{props.product.name}</span>
        <span className='productPrice'>${props.product.price}</span>
        <img className='productImage'
          src={props.product.image}
          alt={props.product.name}
        />
      </Paper>
    </div>
  )
}

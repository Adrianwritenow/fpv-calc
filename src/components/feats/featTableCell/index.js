import React from 'react';
import ReactHover from 'react-hover';

import FeatDetail from '../../feats/featDetail';


const FeatTableCell = (props) => {
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
  }


  return(
    <ReactHover options={optionsCursorTrueWithMargin}>
      <ReactHover.Trigger type='trigger'>
        <img src ={`../${props.featProp.image}`} alt={props.featProp.name}/>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
          <FeatDetail featInfo={props.featProp}/>
      </ReactHover.Hover>
    </ReactHover>

  )
}

export default FeatTableCell;

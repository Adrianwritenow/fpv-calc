import React from 'react';
import ReactHover from 'react-hover';

import HeroMultiCardDetail from './../heroMultiCardDetail';


const HeroMultiCardCell = (props) => {
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0
  }


  return(
    <ReactHover options={optionsCursorTrueWithMargin}>
      <ReactHover.Trigger type='trigger'>
        <img src ={`../${props.heroProp.image}`} alt={props.heroProp.name} className='heroMultiCardImg'/>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
          <HeroMultiCardDetail heroInfo={props.heroProp}/>
      </ReactHover.Hover>
    </ReactHover>

  )
}

export default HeroMultiCardCell;

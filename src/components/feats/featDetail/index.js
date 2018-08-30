import React from 'react';

const FeatDetail = (props) => {

  return(
    <div className='featInfoCard'>
        <span className='featName'>Name:{props.featInfo.name}</span>
        <span className='featLevel'>Feat lv:{props.featInfo.level}</span>
        <span className='featDetail'>Description:{props.featInfo.info}</span>
    </div>
  )
}

export default FeatDetail;

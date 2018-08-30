import React from 'react';

const FeatDetail = (props) => {

  return(
    <div className='featInfoCard'>
        <p className='featName'><span>Name:</span>{props.featInfo.name}</p>
        <p className='featLevel'><span>Feat lv:</span>{props.featInfo.level}</p>
        <p className='featDetail'><span>Description:</span>{props.featInfo.info}</p>
    </div>
  )
}

export default FeatDetail;

import React from 'react';

const FeatDetail = (props) => {

  return(
    <div className='featInfoCard'>
        <p className='featName'><span>Name:</span>{props.itemInfo.name}</p>
        <p className='featDetail'><span>Description:</span>{props.itemInfo.info}</p>
    </div>
  )
}

export default FeatDetail;

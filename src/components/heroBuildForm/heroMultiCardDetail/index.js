import React from 'react';

const HeroMultiCardDetail = (props) => {

  return(
    <div className='heroInfoCard' id={props.heroInfo.faction.toUpperCase()}>
        <img src={props.heroInfo.image} alt={props.heroInfo.name}/>
        <p><span>Name:</span>{props.heroInfo.name}<br/>
          <span>Class:</span>{props.heroInfo.role}<br/>
          <span>Faction:</span>{props.heroInfo.faction}</p>
    </div>
  )
}

export default HeroMultiCardDetail;

import React, { Component } from 'react';
import keyIndex from 'react-key-index';

import heroes from '../characters';
import CharacterTile from '../characters/characterTile';
import '../../styles.css';

class HeroSelector extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(){
    let factionOption = ['KNIGHTS','VIKINGS','SAMURAI'];
    const {faction} = this.props.match.params;

    console.log(factionOption.includes(faction.toUpperCase()));

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:faction Heroes");
}

  render() {
    var heroCardArray=[];

    const {faction} = this.props.match.params
    var array = Object.values(heroes);
    var heroesArray = keyIndex(array, 1);
    console.log(heroesArray);

    heroesArray.map((hero,i)=>{
      if (hero.faction.toUpperCase() == faction.toUpperCase()) {
        heroCardArray.push(
        <span className='heroCard' key={i}>
          <img src={hero.image}/>
          <p>{hero.name}</p>
          <p>{hero.role}</p>
        </span>)
        return heroCardArray;
      }
    });
    return (
      <div>
        {heroCardArray}
      <p>faction heroes 1-6</p>
      </div>
    );

  }
}

export default HeroSelector;

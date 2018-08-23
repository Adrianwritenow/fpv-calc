import React, { Component } from 'react';
import keyIndex from 'react-key-index';

import heroes from '../characters';
import CharacterTile from '../characters/characterTile';

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
    const {faction} = this.props.match.params
    var array = Object.values(heroes);
    var heroesArray = keyIndex(array, 1);
    console.log(heroesArray);

    heroesArray.map((hero)=>{
      if (hero.faction.toUpperCase() == faction.toUpperCase()) {
        return console.log(hero.name);
      }else{
        return;
      }
    });


}
  render() {
    return (
      <div>

      <p>faction heroes 1-6</p>
      </div>

    );

  }
}

export default HeroSelector;

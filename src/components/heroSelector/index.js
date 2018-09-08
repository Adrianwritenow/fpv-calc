import React, { Component } from 'react';
import keyIndex from 'react-key-index';
import CharacterTile from '../characters/characterTile';
import heroes from '../characters';
import '../../styles.css';


class HeroSelector extends Component {


  componentWillMount(){

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
      if (hero.faction.toUpperCase() === faction.toUpperCase()) {
        heroCardArray.push(
          <CharacterTile character={hero} key={i}/>
        )

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

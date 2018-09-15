import React, { Component } from 'react';
import keyIndex from 'react-key-index';
import CharacterTile from '../../characters/characterTile';
import heroes from '../../characters';
import '../../../styles.css';


class HeroMultiCardOption extends Component {


  componentWillMount(){

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:faction ");

}

  render() {
    var heroMultiCardK=[];
    var heroMultiCardS=[];
    var heroMultiCardV=[];



    var array = Object.values(heroes);
    var heroesArray = keyIndex(array, 1);
    console.log(heroesArray);

    heroesArray.map((hero,i)=>{
      if (hero.faction.toUpperCase() ==='KNIGHTS') {
        heroMultiCardK.push(
          <div className='heroMultiCard'>
            <img src={hero.image} value={hero} key={i} className='heroMultiCard'/>
          </div>
        )

      }else if (hero.faction.toUpperCase() ==='SAMURAI') {
        heroMultiCardS.push(
          <div className='heroMultiCard'>
            <img src={hero.image} value={hero} key={i} className='heroMultiCard'/>
          </div>
        )

      }else {
        heroMultiCardV.push(
          <div className='heroMultiCard'>
            <img src={hero.image} value={hero} key={i} className='heroMultiCard'/>
          </div>
        )

      }
        return heroMultiCardK,heroMultiCardS,heroMultiCardV;
    });
    return (
      <div>
        {heroMultiCardK}
        {heroMultiCardS}
        {heroMultiCardV}
      </div>
    );

  }
}

export default HeroMultiCardOption;

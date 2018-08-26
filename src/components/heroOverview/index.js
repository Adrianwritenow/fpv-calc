import React, { Component } from 'react';
import heroes from '../characters';
import '../../styles.css';

class HeroOverView extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(){


  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:heroOverview");
}

  render() {
    var selectedHero =[];
    var heroesArray = Object.values(heroes);
    const {hero} = this.props.match.params;

    heroesArray.map((character,i)=>{
      if (character.name.toUpperCase() == hero.toUpperCase()) {
        console.log(character);
         selectedHero.push(
            <div className='selectedInfo' key={i}>
              <p>Name:{character.name}</p>
              <img src={character.image}/>
              <p>Class:{character.role}</p>
            </div>
          );
        return selectedHero;
      }
    });

    return (
      <div>
        {selectedHero}
        <p>YOU PICKED ME</p>

      </div>
    );

  }
}

export default HeroOverView;

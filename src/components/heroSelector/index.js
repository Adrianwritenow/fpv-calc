import React, { Component } from 'react';
import heroes from '../characters';

class HeroSelector extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:faction Heroes");

    const {faction} = this.props.match.params

    var heroesArray = Object.values(heroes);
    console.log('im the',heroesArray);
    console.log(faction);
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

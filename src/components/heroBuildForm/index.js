import React, { Component } from 'react';
import heroes from '../characters';
import HeroMultiCardOption from './heroMultiCardOption';



class HeroBuildForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:'',
  };
}


  componentDidMount(){
    console.log("COMPONENT MOUNTED:");

}

  render() {
    return (
      <div>
      <form>
        <HeroMultiCardOption stateProp={this.state} />

      </form>;

      </div>

    );
  }
}

export default HeroBuildForm;

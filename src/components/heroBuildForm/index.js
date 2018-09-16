import React, { Component } from 'react';
import HeroMultiCardOption from './heroMultiCardOption';



class HeroBuildForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:'',
    buildName:'',
    buildInfo:''
  };

  this.handleChange = this.handleChange.bind(this);

}

handleChange(e) {
 e.preventDefault();
 this.setState({buildName: e.target.value});
 console.log('The event:',e);

 console.log('The state:',this.state);



}



  componentDidMount(){
    console.log("COMPONENT MOUNTED:");

}

  render() {
    return (
      <div>
      <form>
        <HeroMultiCardOption stateProp={this.state} />
        <input type="text" name="name" onChange={this.handleChange} />
        <input type="text" name="name" />


      </form>;

      </div>

    );
  }
}

export default HeroBuildForm;

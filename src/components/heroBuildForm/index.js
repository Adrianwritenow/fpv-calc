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

handleChange(field,e) {
 e.preventDefault();

 if (field==='nameField') {
   this.setState({buildName: e.target.value});
   console.log('The state:',this.state);


 }else if (field ==='detailField') {
   this.setState({buildInfo: e.target.value});
   console.log('The state:',this.state);



 }

}



  componentDidMount(){
    console.log("COMPONENT MOUNTED:");

}

  render() {
    var nameField='nameField';
    var detailField='detailField';
    return (
      <div>
      <form>
        <HeroMultiCardOption stateProp={this.state} />
        <input type="text" target="name" onChange={(e) => this.handleChange(nameField, e)} />
        <input type="text" name="details" onChange={(e) => this.handleChange(detailField, e)} />
      </form>;

      </div>

    );
  }
}

export default HeroBuildForm;

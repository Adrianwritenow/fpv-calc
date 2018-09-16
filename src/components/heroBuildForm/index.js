import React, { Component } from 'react';
import HeroMultiCardOption from './heroMultiCardOption';



class HeroBuildForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:null,
    buildName:null,
    buildInfo:null
  };

  this.handleChange = this.handleChange.bind(this);
  this.heroSelect = this.heroSelect.bind(this);

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

heroSelect(hero,e) {
 e.preventDefault();
 console.log('The link was clicked.',hero);
 this.setState({hero:hero});
 console.log(this.state);


}



  componentDidMount(){
    console.log("COMPONENT MOUNTED:");

}

  render() {

    const nameField='nameField';
    const detailField='detailField';
    const heroPicked=this.state.hero;

    return (
      <div>
      <form>
      {heroPicked ? (
        <img src={this.state.hero.image} alt={this.state.hero.name}/>
      ):(
        <HeroMultiCardOption onHeroSelect={this.heroSelect} />
      )}
        <input type="text" name="name" onChange={(e) => this.handleChange(nameField, e)} />
        <input type="text" name="details" onChange={(e) => this.handleChange(detailField, e)} />
      </form>;
      </div>

    );
  }
}

export default HeroBuildForm;

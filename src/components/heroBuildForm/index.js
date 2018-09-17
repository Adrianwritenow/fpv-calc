import React, { Component } from 'react';
import HeroMultiCardOption from './heroMultiCardOption';
import FeatPicker from './featPicker';



class HeroBuildForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:null,
    buildName:null,
    buildInfo:null,
    featsPicked:{
      lv1:null,
      lv2:null,
      lv3:null,
      lv4:null
    }
  };

  this.handleChange = this.handleChange.bind(this);
  this.heroSelect = this.heroSelect.bind(this);
  this.featSelect = this.featSelect.bind(this);
  this.repickHero = this.repickHero.bind(this);

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

featSelect(newFeat,e){
  e.preventDefault();
  let featLevel=newFeat.level;
  console.log('new Feat:',newFeat);
  console.log(`lv${featLevel}`)
  this.setState(prevState =>({
    featsPicked:{
    ...prevState.featsPicked,
    [`lv${featLevel}`]:newFeat
    }
  }));
}

heroSelect(hero,e) {
 e.preventDefault();
 console.log('The link was clicked.',hero);
 this.setState({hero:hero});
 console.log(this.state);


}

repickHero(){
  this.setState({
    hero:null,
    featsPicked:null
  });
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
        <div className='buildCreateOverview'>
        <img src={this.state.hero.image} alt={this.state.hero.name}/>
        <FeatPicker heroProp={this.state.hero} onFeatSelect={this.featSelect} featStateProp={this.state.featsPicked}/>
        <button onClick={this.repickHero}>New Hero</button>
        </div>

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

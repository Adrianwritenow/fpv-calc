import React, { Component } from 'react';
import HeroMultiCardOption from './heroMultiCardOption';
import FeatPicker from './featPicker';
import PerkPicker from './perkPicker';



class HeroBuildForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:undefined,
    buildName:undefined,
    buildInfo:undefined,
    featsPicked:{
      lv1:undefined,
      lv2:undefined,
      lv3:undefined,
      lv4:undefined
    },
    perksPicked:[]
  };

  this.handleChange = this.handleChange.bind(this);

  this.heroSelect = this.heroSelect.bind(this);
  this.featSelect = this.featSelect.bind(this);
  this.perkSelect = this.perkSelect.bind(this);
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
  let featRemove=this.state.featsPicked[`lv${featLevel}`];

  if ( featRemove != undefined) {
    let featNameCheck = featRemove.name.toString();
    if (featNameCheck == newFeat.name) {

      console.log('remove it')
      this.setState(prevState =>({
        featsPicked:{
        ...prevState.featsPicked,
        [`lv${featLevel}`]:undefined
        }
      }));
    }
  }else {
    this.setState(prevState =>({
        featsPicked:{
        ...prevState.featsPicked,
        [`lv${featLevel}`]:newFeat
        }
      }));
  }
}




perkSelect(newPerk,e,value){
  e.preventDefault();
  newPerk.rating = value;
  console.log('newPerk:',newPerk);
  let perkStateArray = this.state.perksPicked;
  let perkStateLength = perkStateArray.length;
  let costArray = [0];



  function getSum(total, num) {
    console.log('getSum cost:',total+num)
    return total + num;


}


  if (perkStateLength < 1) {
    console.log('first block')
    this.setState({
      perksPicked: [...perkStateArray, newPerk]
    });
    ///need to push to perkcostarray
    costArray.push(value.cost);

    console.log('costArray',costArray);

    


  }else {

    for (var i = 0; i < perkStateLength; i++) {
      let perkArrayIndex = perkStateArray[`${i}`];
      // console.log('perkValueSum', perkValueSum);
      if (perkArrayIndex.name == newPerk.name) {
        console.log('duplicate');
        perkStateArray.splice(i,1);
        return;

      }
      let perkValueSum = costArray.reduce(getSum);

      let costCheck = perkValueSum + value.cost;
      console.log('costCheck:', costCheck);
      console.log('costArray b4 costchk',costArray);
      console.log('perkValueSum b4 costchk:', perkValueSum);


          if (costCheck < 3) {
            console.log('less than 3');

            if (perkStateLength < 3) {
              console.log('costArray b4 push',costArray);

              costArray.push(perkArrayIndex.rating.cost);
              console.log('costArray aftr push',costArray);


              this.setState({
                perksPicked: [...perkStateArray, newPerk]
              });
              costArray.push(value.cost);
              console.log('costArray',costArray);
              return costArray;
          }


        }

    }
    let perkValueSum = costArray.reduce(getSum);
    console.log('perkValueSum cost high chk',perkValueSum);

    if (perkValueSum+1 > 3) {
      console.log('cost is to DAMN HIGH');
      return;
    }else if (perkStateLength+1 ==4) {
      console.log('MAX PERK LIMIT');

    }

  }



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
        <FeatPicker heroProp={this.state.hero} onFeatSelect={this.featSelect}  featStateProp={this.state.featsPicked}/>
        <PerkPicker heroProp={this.state.hero} onPerkSelect={this.perkSelect} featStateProp={this.state.perksPicked}/>
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

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
  this.duplicatePerkCheck = this.duplicatePerkCheck.bind(this);

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

duplicatePerkCheck(perkStateArray, newPerk, costArray, value,perkStateLength){
  let duplicate=false;
//
  if(perkStateLength+1 == 4){
    // perkStateArray.splice(2,1);

    perkStateArray.forEach((perk,i)=>{
      let perkIndex= perkStateArray[`${i}`];

      if (perkIndex.name == newPerk.name) {
        perkStateArray.splice(i,1);
         newPerk = false;

      }

    });
    return;

  }else{

    perkStateArray.forEach((perk,i)=>{
      let perkIndex= perkStateArray[`${i}`];

      if (perkIndex.name == newPerk.name) {
        perkStateArray.splice(i,1);
         newPerk = false;

      }

      if ( newPerk == false ) {
        console.log('newperk is false');

      }


    });
  }

    if( newPerk !== false && perkStateArray.length < 3 ) {

     this.setState({
       perksPicked: [...perkStateArray, newPerk]
     });
     costArray.push(value.cost);
   }



}




perkSelect(newPerk,e,value){
  e.preventDefault();
  newPerk.rating = value;
  let perkStateArray = this.state.perksPicked;
  let perkStateLength = perkStateArray.length;
  let costArray = [.1];




  const getSum = (total, num) =>total += num;

  if (perkStateLength == 0) {

    this.setState({
      perksPicked: [...perkStateArray, newPerk]
    });
    ///need to push to perkcostarray
    costArray.push(value.cost);

  }

    for (var i = 0; i < perkStateLength; i++) {

      perkStateArray.forEach(function(perk){
        console.log('tik',perk.rating.cost);
        costArray.push(perk.rating.cost);
        return costArray;

      });
      let perkValueSum = costArray.reduce(getSum);

      if (perkValueSum + value.cost > 3.2) {
         console.log('cost is to DAMN HIGH');
         perkStateArray.forEach((perk,i)=>{
           let perkIndex= perkStateArray[`${i}`];

           if (perkIndex.name == newPerk.name) {
             perkStateArray.splice(i,1);
              newPerk = false;

           }
         });

         return ;
       }
         if (perkStateLength < 3) {
                this.duplicatePerkCheck(perkStateArray, newPerk, costArray, value,perkStateLength);


                  console.log('costArray',costArray);


              console.log('perkValSum',perkValueSum);


            return;

        }else if(perkStateLength+1 ==4) {

            console.log('MAX PERK LIMIT PlEASE UNSELECT A PERK!');
            this.duplicatePerkCheck(perkStateArray, newPerk, costArray, value,perkStateLength);

            return;

          }

      }
  }



heroSelect(hero,e) {
 e.preventDefault();
 console.log('The link was clicked.',hero);
 this.setState({hero:hero});


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
        <PerkPicker heroProp={this.state.hero} onPerkSelect={this.perkSelect} perkStateProp={this.state.perksPicked}/>
        <button onClick={this.repickHero}>New Hero</button>
        </div>

      ):(
        <HeroMultiCardOption onHeroSelect={this.heroSelect} />
      )}
        <input type="text" name="name" onChange={(e) => this.handleChange(nameField, e)} />
        <textarea type="text" name="details" onChange={(e) => this.handleChange(detailField, e)} />
      </form>;
      </div>

    );
  }
}

export default HeroBuildForm;

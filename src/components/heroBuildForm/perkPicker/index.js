import React, { Component } from 'react';
import ReactDOM from "react-dom";
import FeatTableCell from '../../feats/featTableCell';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';



class PerkPicker extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:this.props.heroProp,
    perkValue:[''],
    common:{
      0:false,
      1:false,
      2:false
    },
    rare:false,
    heroic:false,
    epic:false,
    legendary:false
  };
  // This binding is necessary to make `this` work in the callback
  this.handlePerk = this.handlePerk.bind(this);
  this.handleChange = this.handleChange.bind(this);

}



handleChange(e) {
  e.preventDefault();

console.log('state:::',this.state);

}




handlePerk(perk,e,value){
  let perkStateProps = this.props.perkStateProp;
  e.preventDefault();
  console.log('<><>:',value)


        perkStateProps.forEach((perkProp,i)=>{
          if (value.rarity == 'common') {

            let heroPerkIndex = perkStateProps[`${i}`];
            if (heroPerkIndex.name == perk.name) {
              this.setState(prevState=>({
                common:{
                  ...prevState.common,
                  [`${i}`]:false
                }
              }));
              console.log('madefalse');
          }


    }else if (value.rarity != 'common') {
      let perkMap = this.state.hero.perks[`${value.rarity}`];

        console.log('itworks',perkMap.name);
        if (perkMap.name == perk.name) {
            this.setState({
              [`${value.rarity}`]:false
            });
        }

    }

  });








  this.props.onPerkSelect(perk,e,value);

}

componentDidMount(){
  console.log("COMPONENT MOUNTED:");

}

componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.perkStateProp);
    console.log('orig props', this.props.perkStateProp);

    let perkStateProps = this.props.perkStateProp;

    nextProps.perkStateProp.forEach((perk,i)=>{
      let perkIndex = nextProps.perkStateProp[`${i}`];
      if (perk.rating.rarity == 'common' && perkStateProps.length < 3  ) {
        this.state.hero.perks.common.map((heroPerk,i)=>{
          let heroPerkIndex = this.state.hero.perks.common[`${i}`];
          if (heroPerkIndex.name == perkIndex.name) {
            this.setState(prevState=>({
              common:{
                ...prevState.common,
                [`${i}`]:true
              }
            }));

        }
      });
          console.log('you have a',perk.rating.rarity);
    }else if (perk.rating.rarity != 'common' && perkStateProps.length < 3) {
      let perkRating =perk.rating.rarity;

      let perkMap = this.state.hero.perks[`${perkRating}`];
      if (perkMap.name == perk.name) {
        this.setState({
          [`${perkRating}`]:true
        });
      }
    }
  });
// }
}


  render(){


    var perkArrayCommon=[];
    var perkArrayRare=[];
    var perkArrayHeroic=[];
    var perkArrayEpic=[];
    var perkArrayLegendary=[];
    const hero = this.state.hero;
    let perkStateProps = this.props.perkStateProp;
    var common = {
      rarity:'common',
      cost:.8
    };
    var rare = {
      rarity:'rare',
      cost:1
    };
    var heroic = {
      rarity:'heroic',
      cost:1.5
    };
    var epic = {
      rarity:'epic',
      cost:1.5
    };
    var legendary = {
      rarity:'legendary',
      cost:1.5
    };


          hero.perks.common.map((perk,i)=>{
            perkArrayCommon.push(<td onClick={(e)=>this.handlePerk(perk,e,common)} key={i} className={ this.state.common[`${i}`] ? `commonSelect${i}` : false }><FeatTableCell key={i} heroItem={perk}/></td>);
            return perkArrayCommon;
          })

          perkArrayRare.push(<td onClick={(e)=>this.handlePerk(hero.perks.rare,e,rare)} key='rare'  className={ this.state.rare ? `rare` : false }><FeatTableCell heroItem={hero.perks.rare}/></td>);
          perkArrayHeroic.push(<td onClick={(e)=>this.handlePerk(hero.perks.heroic,e,heroic)} key='heroic' className={ this.state.heroic ? `heroic` : false }><FeatTableCell heroItem={hero.perks.heroic} /></td>)
          perkArrayEpic.push(<td onClick={(e)=>this.handlePerk(hero.perks.epic,e,epic)} key='epic' className={ this.state.epic ? `epic` : false }> <FeatTableCell  heroItem={hero.perks.epic} /></td>)
          perkArrayLegendary.push(<td onClick={(e)=>this.handlePerk(hero.perks.legendary,e,legendary)} className={ this.state.legendary ? `legendary` : false }><FeatTableCell heroItem={hero.perks.legendary} /></td>)




    return (
      <Table className='heroPerkTable'>
        <TableHead>
          <TableRow>
          <TableCell><h1>PERKS</h1></TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      <TableRow className='perksRow'>
      <TableCell  scope="row">COMMON</TableCell>
        {perkArrayCommon}
      </TableRow>
      <TableRow className='perksRow'>
      <TableCell  scope="row">RARE</TableCell>
        {perkArrayRare}
      </TableRow>
      <TableRow className='perksRow'>
      <TableCell  scope="row">HEROIC</TableCell>
      {perkArrayHeroic}
      </TableRow>
      <TableRow className='perksRow'>
      <TableCell>EPIC</TableCell>
      {perkArrayEpic}
      </TableRow>
      <TableRow className='perksRow'>
      <TableCell>LEGENDARY</TableCell>
      {perkArrayLegendary}
      </TableRow>
      <input type="text" name="details" onChange={(e) => this.handleChange(e)} />
      </TableBody>
      </Table>

    );
  }
}

export default PerkPicker;

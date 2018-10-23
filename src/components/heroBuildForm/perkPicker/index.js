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

console.log('propinchange::',this.props.perkStateProp);

}




handlePerk(perk,e,value){
  let perkStateProps = this.props.perkStateProp;
  e.preventDefault();
  this.props.onPerkSelect(perk,e,value);

  perkStateProps.map((perk)=>{

    // if (perk.rating.rarity == 'common') {
    //   this.state.hero.perks.common.map((heroPerk,i)=>{
    //     // if (heroPerk.name == perk.name) {
    //     //   this.setState(prevState =>({
    //     //     common:{
    //     //       [`${i}`]:!this.state.common[`${i}`]
    //     //     }
    //     //   }));
    //   });
    //     }

        console.log('you have a',perk.rating.rarity);



  });
  // console.log('perkStateProp:::',this.props.onPerkSelect(perk,e,value));


  // this.props.perkStateProp.map( perk => console.log('PERKSTATE MAP-PROP:',perk))

}

componentDidMount(){
  console.log("COMPONENT MOUNTED:");

}

componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps.perkStateProp);
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
            perkArrayCommon.push(<td onClick={(e)=>this.handlePerk(perk,e,common)} key={i} className={ this.state.common[`${i}`] ? `commonSelect${i}` : null }><FeatTableCell key={i} heroItem={perk}/></td>);
            return perkArrayCommon;
          })

          perkArrayRare.push(<td onClick={(e)=>this.handlePerk(hero.perks.rare,e,rare)} key='rare'  ><FeatTableCell heroItem={hero.perks.rare}/></td>);
          perkArrayHeroic.push(<td onClick={(e)=>this.handlePerk(hero.perks.heroic,e,heroic)} key='heroic' ><FeatTableCell heroItem={hero.perks.heroic} /></td>)
          perkArrayEpic.push(<td onClick={(e)=>this.handlePerk(hero.perks.epic,e,epic)} key='epic' ><FeatTableCell  heroItem={hero.perks.epic} /></td>)
          perkArrayLegendary.push(<td onClick={(e)=>this.handlePerk(hero.perks.legendary,e,legendary)} ><FeatTableCell heroItem={hero.perks.legendary} /></td>)




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

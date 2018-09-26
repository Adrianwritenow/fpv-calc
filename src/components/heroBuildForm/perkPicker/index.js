import React, { Component } from 'react';
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

    perk1:{
      index0:false,
      index1:false,
      index2:false
    },
    perk2:false,
    perk3:false
  };
  // This binding is necessary to make `this` work in the callback
  this.handlePerk = this.handlePerk.bind(this);
}


handlePerk(perk,e,i,value){
  e.preventDefault();
  this.props.onPerkSelect(perk,e,value);
}

componentDidMount(){
  console.log("COMPONENT MOUNTED:");

}
  render(){


    var perkArrayCommon=[];
    var perkArrayRare=[];
    var perkArrayHeroic=[];
    var perkArrayEpic=[];
    var perkArrayLegendary=[];
    const hero = this.state.hero;
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
            perkArrayCommon.push(<td onClick={(e)=>this.handlePerk(perk,e,i,common)} key={i}><FeatTableCell key={i} heroItem={perk}/></td>);
            return perkArrayCommon;
          })

          perkArrayRare.push(<td ><FeatTableCell heroItem={hero.perks.rare}/></td>);
          perkArrayHeroic.push(<td ><FeatTableCell heroItem={hero.perks.heroic}/></td>)
          perkArrayEpic.push(<td ><FeatTableCell  heroItem={hero.perks.epic}/></td>)
          perkArrayLegendary.push(<td><FeatTableCell heroItem={hero.perks.legendary}/></td>)



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
      </TableBody>
      </Table>

    );
  }
}

export default PerkPicker;

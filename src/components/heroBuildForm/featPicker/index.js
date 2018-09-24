import React, { Component } from 'react';
import FeatTableCell from '../../feats/featTableCell';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';



class FeatPicker extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:this.props.heroProp,
    feat1:{
      index0:false,
      index1:false,
      index2:false
    },
    feat2:{
      index3:false,
      index4:false,
      index5:false
    },feat3:{
      index6:false,
      index7:false,
      index8:false
    },feat4:{
      index9:false,
      index10:false,
      index11:false
    }

    perk1:false,
    perk2:false,
    perk3:false
  };


  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handlePick.bind(this);

}


handlePick(feat,e,i){
  e.preventDefault();
  var lv = feat.level;
  var stateVar=this.state[`feat${lv}`];

  this.props.onFeatSelect(feat,e);
  this.setState({
    [`feat${lv}`]:{
      [`index${i}`]:!stateVar[`index${i}`]
    }
  });
}

componentDidMount(){
  console.log("COMPONENT MOUNTED:");

}
  render(){

    var featArray1=[];
    var featArray2=[];
    var featArray3=[];
    var featArray4=[];
    var perkArrayCommon=[];
    var perkArrayRare=[];
    var perkArrayHeroic=[];
    var perkArrayEpic=[];
    var perkArrayLegendary=[];
    const hero = this.state.hero;


          hero.feats.map((feat,i)=>{

            if (feat.level === 1) {
              featArray1.push(<td onClick={(e)=>this.handlePick(feat,e,i)} key={i} id={i} className={ this.state.feat1[`index${i}`] ? `${hero.faction}FeatPick${i}` : null }><FeatTableCell key={i} heroItem={feat}/></td>);
            }else if (feat.level === 2) {
              featArray2.push(<td onClick={(e)=>this.handlePick(feat,e,i)} key={i} id={i} className={ this.state.feat2[`index${i}`] ? `${hero.faction}FeatPick${i}` : null }><FeatTableCell key={i} heroItem={feat}/></td>);
            }else if (feat.level === 3) {
                featArray3.push(<td onClick={(e)=>this.handlePick(feat,e,i)} key={i} id={i} className={ this.state.feat3[`index${i}`] ? `${hero.faction}FeatPick${i}` : null }><FeatTableCell key={i} heroItem={feat}/></td>);
              }else {
                featArray4.push(<td onClick={(e)=>this.handlePick(feat,e,i)} key={i} id={i} className={ this.state.feat4[`index${i}`] ? `${hero.faction}FeatPick${i}` : null }><FeatTableCell key={i} heroItem={feat}/></td>);
              }
              return featArray1,featArray2,featArray3,featArray4;

          });

          hero.perks.common.map((perk,i)=>{
            perkArrayCommon.push(<td onClick={(e)=>this.handlePick(perk,e,i)} key={i}><FeatTableCell key={i} heroItem={perk}/></td>);
            return perkArrayCommon;
          })

          perkArrayRare.push(<td key={i}><FeatTableCell key={i} heroItem={hero.perks.rare}/></td>);
          perkArrayHeroic.push(<td key={i}><FeatTableCell key={i} heroItem={hero.perks.heroic}/></td>)
          perkArrayEpic.push(<td key={i}><FeatTableCell key={i} heroItem={hero.perks.epic}/></td>)
          perkArrayLegendary.push(<td key={i}><FeatTableCell key={i} heroItem={hero.perks.legendary}/></td>)






    return (
      <Table className='heroFeatTable'>
        <TableHead>
          <TableRow>
          <TableCell><h1>Feats</h1></TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
      <TableRow className='featsRow'>
      <TableCell  scope="row">LEVEL 1</TableCell>
        {featArray1}
      </TableRow>
      <TableRow className='featsRow'>
      <TableCell  scope="row">LEVEL 2</TableCell>
        {featArray2}
      </TableRow>
      <TableRow className='featsRow'>
      <TableCell  scope="row">LEVEL 3</TableCell>
      {featArray3}
      </TableRow>
      <TableRow className='featsRow'>
      <TableCell>LEVEL 4</TableCell>
      {featArray4}
      </TableRow>
      </TableBody>
      </Table>

    );
  }
}

export default FeatPicker;

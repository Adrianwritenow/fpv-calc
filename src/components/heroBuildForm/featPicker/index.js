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
    feats:{
      lv0:false,
      lv1:false,
      lv2:false
    }
  };

  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handlePick.bind(this);

}


handlePick(feat,e,i){
  e.preventDefault();
  var lv = feat.level;
  var value= 'lv'+i;

  this.props.onFeatSelect(feat,e);
  this.setState({
    feats:{
      [`lv${i}`]:!this.state[value]    
    }

  })
  console.log('state in the feat form',this.state);
  console.log('feat lv',feat.level);


}

componentDidMount(){
  console.log("COMPONENT MOUNTED:");

}


  render(){

    var featArray1=[];
    var featArray2=[];
    var featArray3=[];
    var featArray4=[];
    const hero = this.state.hero;


          hero.feats.map((feat,i)=>{
            var lv=feat.level;
            var value='lv'+i;

            if (feat.level === 1) {
              featArray1.push(<td onClick={(e)=>this.handlePick(feat,e,i)} key={i} id={i} className={ this.state.feats[value] ? `${hero.faction}FeatPick${i}` : null }><FeatTableCell key={i} featProp={feat}/></td>);
            }else if (feat.level === 2) {
              featArray2.push(<td onClick={(e)=>this.handlePick(feat,e)} key={i}><FeatTableCell key={i} featProp={feat}/></td>);
            }else if (feat.level === 3) {
                featArray3.push(<td onClick={(e)=>this.handlePick(feat,e)} key={i}><FeatTableCell key={i} featProp={feat}/></td>);
              }else {
                featArray4.push(<td onClick={(e)=>this.handlePick(feat,e)} key={i}><FeatTableCell key={i} featProp={feat}/></td>);
              }
              return featArray1,featArray2,featArray3,featArray4;

          });



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

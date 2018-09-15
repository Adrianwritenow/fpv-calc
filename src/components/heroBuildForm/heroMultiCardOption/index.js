import React, { Component } from 'react';
import keyIndex from 'react-key-index';
import heroes from '../../characters';
import HeroMultiCardCell from './../heroMultiCardCell';
import { Form, Select, Option } from 'informed';


import '../../../styles.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class HeroMultiCardOption extends Component {
  constructor(props) {
  super(props);
  this.state = {
    hero:'',
  };

  // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handleClick.bind(this);
}

 handleClick(hero,e) {
  e.preventDefault();
  console.log('The link was clicked.',hero);
  this.state.hero = hero;
  console.log(this.state);

}


  componentWillMount(){

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:faction ");

}

  render() {
    var heroMultiCardK=[];
    var heroMultiCardS=[];
    var heroMultiCardV=[];

    var array = Object.values(heroes);
    var heroesArray = keyIndex(array, 1);



    heroesArray.map((hero,i)=>{
      if (hero.faction.toUpperCase() ==='KNIGHTS') {
        heroMultiCardK.push(
            <td key={i} onClick={(e)=>this.handleClick(hero,e)}><HeroMultiCardCell key={i} heroProp={hero} /></td>
        )
      }else if (hero.faction.toUpperCase() ==='SAMURAI') {
        heroMultiCardS.push(
            <td key={i} onClick={(e)=>this.handleClick(hero,e)}><HeroMultiCardCell key={i} heroProp={hero} /></td>
        )
      }else {
        heroMultiCardV.push(
            <td key={i} onClick={(e)=>this.handleClick(hero,e)}><HeroMultiCardCell key={i} heroProp={hero} /></td>
        )
      }
        return heroMultiCardK,heroMultiCardS,heroMultiCardV;
    });
    return (
      <Paper className='heroMultiCardContainer'>
        <Table className='heroMultiSelectTable'>
          <TableBody>

            <TableRow className='featsRow'>
              {heroMultiCardK}
            </TableRow>
            <TableRow className='featsRow'>
              {heroMultiCardS}
            </TableRow>
            <TableRow className='featsRow'>
              {heroMultiCardV}
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default HeroMultiCardOption;

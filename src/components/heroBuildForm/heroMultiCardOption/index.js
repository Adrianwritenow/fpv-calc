import React, { Component } from 'react';
import keyIndex from 'react-key-index';
import heroes from '../../characters';
import HeroMultiCardCell from './../heroMultiCardCell';

import '../../../styles.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class HeroMultiCardOption extends Component {


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
            <td key={i}><HeroMultiCardCell key={i} heroProp={hero} /></td>
        )

      }else if (hero.faction.toUpperCase() ==='SAMURAI') {
        heroMultiCardS.push(
            <td key={i}><HeroMultiCardCell key={i} heroProp={hero} /></td>
        )

      }else {
        heroMultiCardV.push(
            <td key={i}><HeroMultiCardCell key={i} heroProp={hero} /></td>
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

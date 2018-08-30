import React, { Component } from 'react';
import heroes from '../characters';
import '../../styles.css';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';

import FeatTableCell from '../feats/featTableCell';




class HeroOverView extends Component {

  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);

  }



  componentWillMount(){

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:heroOverview");
}

handleHover(feat){
  console.log('feat detail:',feat.name);
}

  render() {
    var selectedHero =[];
    var featArray1=[];
    var featArray2=[];
    var featArray3=[];
    var featArray4=[];





    var heroesArray = Object.values(heroes);
    const {hero} = this.props.match.params;

    heroesArray.map((character,i)=>{
      if (character.name.toUpperCase() == hero.toUpperCase()) {
         selectedHero.push(
            <div className='selectedInfo' key={i}>
              <p>Name:{character.name}</p>
              <img src={`../${character.image}`}/>
              <p>Class:{character.role}</p>
            </div>
          );

          character.feats.map((feat,i)=>{
            if (feat.level == 1) {
              featArray1.push(<FeatTableCell key={i} featProp={feat}/>);
            }else if (feat.level == 2) {
              featArray2.push(<FeatTableCell key={i} featProp={feat}/>);
            }else if (feat.level == 3) {
                featArray3.push(<FeatTableCell key={i} featProp={feat}/>);
              }else {
                featArray4.push(<FeatTableCell key={i} featProp={feat}/>);
              }

          })
        return selectedHero,featArray1,featArray2,featArray3,featArray4;
      }
    });

    return (
      <Paper className='heroOverviewContainer'>
        {selectedHero}
        <Table className='heroOverviewTable'>
          <TableHead>
            <TableRow>
              <TableCell><h1>Feats</h1></TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        <TableRow className='lv1Feats'>
        <TableCell component="th" scope="row">LEVEL 1</TableCell>
          {featArray1}
        </TableRow>
        <TableRow>
        <TableCell component="th" scope="row">LEVEL 2</TableCell>
          {featArray2}
        </TableRow>
        <TableRow>
        <TableCell component="th" scope="row">LEVEL 3</TableCell>
        {featArray3}
        </TableRow>
        <TableRow>
        <TableCell component="th" scope="row">LEVEL 4</TableCell>
        {featArray4}
        </TableRow>
        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default HeroOverView;

import React, { Component } from 'react';
import heroes from '../characters';
import '../../styles.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class HeroOverView extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(){

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:heroOverview");
}

  render() {
    var selectedHero =[];
    var featArray=[];
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

          character.feats.level1.map((feat,i)=>{
            featArray.push(
                <TableCell>{feat.name}</TableCell>
            );

          })
        return selectedHero, featArray;
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
        <TableCell component="th" scope="row">LEVEL 1</TableCell>
        {featArray}

        </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default HeroOverView;

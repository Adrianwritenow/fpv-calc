import React, { Component } from 'react';
import heroes from '../characters';
import '../../styles.css';

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
    var heroAgainst=[];





    var heroesArray = Object.values(heroes);
    const {hero} = this.props.match.params;

    heroesArray.map((character,i)=>{

      if (character.name.toUpperCase() === hero.toUpperCase()) {
         selectedHero.push(
            <div className='selectedInfo' key={i}>
              <p>Name:{character.name}</p>
              <img src={`../${character.image}`} alt={character.name}/>
              <p>Class:{character.role}</p>
            </div>
          );

          character.feats.map((feat,i)=>{
            if (feat.level === 1) {
              featArray1.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
            }else if (feat.level === 2) {
              featArray2.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
            }else if (feat.level === 3) {
                featArray3.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
              }else {
                featArray4.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
              }
              return selectedHero,featArray1,featArray2,featArray3,featArray4;

          })
      }else{
        heroAgainst.push(<TableRow className='heroAgainstRow' value={character} key={i}>
                          <TableCell><button></button><p>NUM1</p></TableCell>
                          <TableCell>{character.name}</TableCell>
                          <TableCell><button></button><p>NUM2</p></TableCell>
                         </TableRow>);
        return heroAgainst;
      }
    });

    return (
      <Paper className='heroOverviewContainer'>
        {selectedHero}
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

        <Table className='heroVsTable'>
          <TableHead>
            <TableRow>
              <TableCell>Strong Against</TableCell>
              <TableCell>Vs</TableCell>
              <TableCell>Weak Against</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {heroAgainst}
        </TableBody>
        </Table>


        <Table className='topBuildTable'>
          <TableHead>
            <TableRow>
              <TableCell><h1>POPULAR BUILDS</h1></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>By</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        <TableRow>
          <TableCell>PLACE HOLDER</TableCell>
          <TableCell>AUTHOR</TableCell>
          <TableCell>PLACE HOLDER</TableCell>
        </TableRow>
        </TableBody>
        </Table>
      </Paper>

    );
  }
}

export default HeroOverView;

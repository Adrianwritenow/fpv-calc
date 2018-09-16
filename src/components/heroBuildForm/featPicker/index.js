import React, { Component } from 'react';
import FeatTableCell from '../../feats/featTableCell';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';



const FeatPicker = (props) => {

    var featArray1=[];
    var featArray2=[];
    var featArray3=[];
    var featArray4=[];

    const hero = props.heroProp;

          hero.feats.map((feat,i)=>{
            if (feat.level === 1) {
              featArray1.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
            }else if (feat.level === 2) {
              featArray2.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
            }else if (feat.level === 3) {
                featArray3.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
              }else {
                featArray4.push(<td key={i}><FeatTableCell key={i} featProp={feat}/></td>);
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

export default FeatPicker;

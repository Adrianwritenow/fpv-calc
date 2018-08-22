import React, { Component } from 'react';
import FactionTile from '../factions/factionTile';
import factions from '../factions';

class factionSelector extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:");
    console.log("i am a factions", factions);
  }

  render() {
    return (
      <div>
      <FactionTile faction={factions.knights}/>
      <FactionTile faction={factions.samurai}/>
      <FactionTile faction={factions.vikings}/>


      </div>

    );
  }
}

export default factionSelector;

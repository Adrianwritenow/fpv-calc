import React, { Component } from 'react';



var fhLogo= './images/forHonorLogo.png';


class factionSelector extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:");
  }

  render() {
    return (
      <div>
        <p>SPLASH</p>
        <img src={fhLogo} className="App-logo" alt="logo" />

      </div>

    );
  }
}

export default factionSelector;

import React, { Component } from 'react';



// var fhLogo= './images/forHonorLogo.png';


class factionSelector extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:");
  }

  render() {
    return (
      <div>
        <header>Hero Builder</header>
          {this.props.children}
        <footer>created by Adrianwritenow</footer>
      </div>

    );
  }
}

export default factionSelector;

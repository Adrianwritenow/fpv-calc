import React, { Component } from 'react';
import 

class FactionHeroes extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log("COMPONENT MOUNTED:faction Heroes");
    const {faction} = this.props.match.params
  }

  render() {
    return (
      <div>
      <p>faction heroes 1-6</p>


      </div>

    );
  }
}

export default FactionHeroes;

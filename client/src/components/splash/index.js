import React, { Component } from 'react';
import SignupForm from '../signupForm';
import '../../styles.css';


class Splash extends Component {


  componentWillMount(){

  }

  componentDidMount(){

}

  render() {
    return (
      <div className='splashWrapper'>
      <h1>WELCOME</h1>
      <SignupForm />
      </div>
    );

  }
}

export default Splash;

import React, { Component } from 'react';
import { Form, Text, Scope } from 'informed';
import heroes from '../characters';
import HeroMultiCardOption from './heroMultiCardOption';



class HeroBuildForm extends Component {
  

  componentDidMount(){
    console.log("COMPONENT MOUNTED:");
  }

  render() {
    return (
      <div>
      <Form onChange={formState => console.log(formState.values)}>
        <HeroMultiCardOption />
        <Scope scope='hero'>
          <Text field='name' id='heroName'/>
        </Scope>
        <label htmlFor="intro-name">Build Name:</label>
        <Text field="name" id="intro-name" />
        <button type="submit">Submit</button>
      </Form>;

      </div>

    );
  }
}

export default HeroBuildForm;

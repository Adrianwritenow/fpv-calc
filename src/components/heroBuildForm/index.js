import React, { Component } from 'react';
import { Form, Text, Scope } from 'informed';


class HeroBuildForm extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:");
  }

  render() {
    return (
      <div>

        <Form id="intro-form">
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

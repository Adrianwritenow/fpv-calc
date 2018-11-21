import React, { Component } from 'react';
import '../../styles.css';
import { FormGroup,ControlLabel,FormControl,Form, Col,Button } from 'react-bootstrap';

class SignupForm extends Component {
  constructor(props, context) {
      super(props, context);


      this.state = {
        value: ''
      };
    }


  render() {

    return (
      <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">Sign in</Button>
      </Col>
    </FormGroup>
  </Form>

    );

  }
}

export default SignupForm;

import React, { Component } from 'react';
import '../../styles.css';
import { FormGroup,ControlLabel,FormControl,Form, Col,Button } from 'react-bootstrap';

class SignupForm extends Component {
  constructor(props, context) {
      super(props, context);


      this.state = {
        notSignUp:undefined,
        value: ''
      };

      this.signUp = this.signUp.bind(this);

    }

    signUp(e) {
      e.preventDefault();
      let currentState = this.state.notSignUp;
     this.setState({
       notSignUp:!currentState

     })

    }


  render() {
    const notSignUp=this.state.notSignUp;


    return (


      <div className='formWrapper'>
      <Form horizontal>
      {notSignUp ? (
      <div className='signInWrapper'>
      <h1>SIGN UP</h1>

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
            <Button type="submit">REGISTER</Button>
          </Col>
        </FormGroup>
        <Button  onClick={(e)=>this.signUp(e)}>I HAVE A ACCOUNT</Button>
        </div>
    ):(

      <div className='signUpWrapper'>
      <h1>SIGN IN</h1>

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
            <Button type="submit">SIGN IN</Button>
          </Col>
        </FormGroup>
      <Button onClick={(e)=>this.signUp(e)} >I NEED A ACCOUNT</Button>
    </div>
    )}
    </Form>
    <Button>I FORGOT DUUUUR</Button>

    </div>

    );

  }
}

export default SignupForm;

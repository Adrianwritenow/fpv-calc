import React, { Component } from 'react';
import '../../styles.css';
import {connect} from 'react-redux';

import { FormGroup,ControlLabel,FormControl,Form, Col,Button } from 'react-bootstrap';

class SignupForm extends Component {
  constructor(props, context) {
      super(props, context);


      this.state = {
        notSignUp:undefined,
        value: '',
        userName:'',
        password:'',
        name:'',
        email:''
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
      {notSignUp ? (
      <div className='signInWrapper'>
      <Form horizontal  onSubmit={this.registerUser}>
      <h1>SIGN UP</h1>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="name" placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            User Name
          </Col>
          <Col sm={10}>
            <FormControl type="userName" placeholder="User Name" />
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
        </Form>

        </div>
    ):(

      <div className='signUpWrapper'>
      <Form horizontal>

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
      </Form>

    </div>

    )}
    <Button href='/forgotEmail'>I FORGOT DUUUUR</Button>

    </div>

    );

  }
}

export defaultconnect(mapStateToProps,mapDispatchToProps)(SignupForm);
;

import React, { Component } from 'react';
import '../../styles.css';
import {connect} from 'react-redux';
import {register} from './../../redux/actions';

import { FormGroup,ControlLabel,FormControl,Form, Col,Button } from 'react-bootstrap';

class SignupForm extends Component {
  constructor(props, context) {
      super(props, context);


      this.state = {
        notSignUp:undefined,
        value: '',
        userName:'',
        password:'',
        newPassword:'',
        firstName:'',
        lastName:'',
        email:''
      };

      this.signUp = this.signUp.bind(this);
      this.registerUser = this.registerUser.bind(this);


    }

    updateState = (field) => {
      return (event) => {
          this.setState({[field]: event.target.value})
      }
      console.log("this state:",this.state)
  }

    signUp(e) {
      e.preventDefault();
      let currentState = this.state.notSignUp;
     this.setState({
       notSignUp:!currentState

     })

    }

    registerUser(e){
      e.preventDefault();

      const register = this.props.register;

      register(this.state, () => {
           this.setState({
               email: "",
               username: "",
               password: "",
               auth_token:""

           })

         });


    }


  render() {
    const notSignUp=this.state.notSignUp;
    return (

      <div className='formWrapper'>
      {notSignUp ? (
      <div className='signUpWrapper'>
      <Form horizontal>
      <h1>SIGN UP</h1>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl value={this.state.email} onChange={this.updateState('level')} type="newEmail" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="name" value={this.state.firstName} onChange={this.updateState('firstName')} placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl type="name" value={this.state.lastName} onChange={this.updateState('lastName')} placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            User Name
          </Col>
          <Col sm={10}>
            <FormControl type="userName" value={this.state.userName} onChange={this.updateState('userName')} placeholder="User Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" value={this.state.password} onChange={this.updateState('newPassword')} placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.registerUser}>REGISTER</Button>
          </Col>
        </FormGroup>
        <Button  onClick={(e)=>this.signUp(e)}>I HAVE A ACCOUNT</Button>
        </Form>

        </div>
    ):(

      <div className='signInWrapper'>
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

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (registerInfo, callback) => dispatch(register(registerInfo, callback))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);

import React, { Component } from 'react';

class heroBuildForm extends Component {

  componentDidMount(){
    console.log("COMPONENT MOUNTED:");
  }

  render() {
    return (
      <div>

<form >
First name:<br>
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
</form>

      </div>

    );
  }
}

export default heroBuildForm;

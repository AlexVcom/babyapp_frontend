import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NumericInput from 'react-numeric-input';
import './CSS/Registration.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RegistrationAlert from './RegistrationAlert.js';

class Registration extends Component {
  
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  constructor(props) {
    super(props);
    this.registrationAlert = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.registerUser(
      event.target.name.value,
      event.target.password.value,
      event.target.email.value,
      event.target.telephone.value,
      event.target.childName.value,
      event.target.childBirthDay.value,
      event.target.gender.value,
      event.target.weight.value,
      event.target.growth.value,
      event.target.foodType.value,
    );
  }

  registerUser(
    name,
    password,
    email,
    telephone,
    childName,
    childBirthDay,
    gender,
    weight,
    growth,
    foodType
  ) {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parentName: name,
        password: password,
        email: email,
        telephone: telephone,
        children:[{
          name: childName,
          birthDate: childBirthDay,
          gender: gender,
          weight: weight,
          growth: growth,
          foodType: foodType
        
        }]
        
      })
    })
    // fetch('/api/child', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: childName,
    //     birthDate: childBirthDay,
    //     gender: gender,
    //     weight: weight,
    //     growth: growth,
    //     foodType: foodType
    //   })
    // })
    .then(function (response) {
      if (response.status === 200) {
        this.showRegistrationAlert("success", "User registered!", "You can now log in using your credentials.");
      } else if (response.status === 422) {
        this.showRegistrationAlert("danger", "User already exists", "Please choose a different name.");
      } else {
        this.showRegistrationAlert("danger", "User not registered!", "Something went wrong.");
      }
    }.bind(this)).catch(function (error) {
      this.showRegistrationAlert("danger", "Error", "Something went wrong.");
    }.bind(this));
  }
  showRegistrationAlert(variant, heading, message) {
    this.registrationAlert.current.setVariant(variant);
    this.registrationAlert.current.setHeading(heading);
    this.registrationAlert.current.setMessage(message);
    this.registrationAlert.current.setVisible(true);
  }



  render() {
    // return musi zwracać środek 
    return (
      <>
        <div className="Registration">
          <center> <h3>Welcome to Baby App regestration</h3></center><br />
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group controlId="name" size="lg">
                <Form.Label>Name</Form.Label>
                <Form.Control autoFocus name="name" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="email" size="lg">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="password" size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="telephone" size="lg">
              <Form.Label>Telephone number</Form.Label>
              <Form.Control autoFocus name="telephone" placeholder="number" />
            </Form.Group>

            <Form.Group controlId="child.childName" size="lg">
              <Form.Label>Child name</Form.Label>
              <Form.Control autoFocus name="childName" placeholder="Child name" />
            </Form.Group>
            {/* //data urodzenia  */}
            <Form.Group controlId="childBirthDay" size="lg">
              <Form.Label>Child Birth Day</Form.Label><br />
              <DatePicker selected={this.state.startDate}
                onChange={this.handleChange} name="childBirthDay" />
            </Form.Group>

            <Form.Row>
              {/* sex */}
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender">
                  <option>FEMALE</option>
                  <option>MALE</option>
                </Form.Control>
              </Form.Group>
              {/* food type */}
              <Form.Group controlId="foodType" size="lg">
                <Form.Label>Food type</Form.Label>
                <Form.Control as="select" name="foodType" defaultValue="Choose...">
                  <option>BREAST_FEEDING</option>
                  <option>MODIFICATION_MILK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="growth" xs>
              <Form.Label>Growth</Form.Label>
              <Form.Control autoFocus name="growth" placeholder="Child growth" />
            </Form.Group>

              {/* <Form.Group controlId="growth">
                <Form.Label>Growth</Form.Label>
                <Form.Control as="select" name="growth">
                  <option>123</option>
                  <option>132</option>
                </Form.Control>
              </Form.Group> */}

              <Form.Group controlId="weight" size="l">
              <Form.Label>Weight</Form.Label>
              {/* <Form.Control autoFocus name="weight" placeholder="Child weight" /> */}
              <NumericInput autoFocus name="weight" controlId="weight" className="form-control"
              step={0.1} precision={1} value={4.1} snap/>
            </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          
        </div>

        <RegistrationAlert ref = { this.registrationAlert }/>
      </>

    );
  }
}

export default Registration;

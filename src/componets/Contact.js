import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CSS/Contact.css'


class Contact extends Component {
  render() {
    // return musi zwracać środek 
    return <div className="Contact">
      <Form>
        <Form.Group controlId="formBasicEmail" size="lg">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
           </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" size="lg">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="text" placeholder="telephone" />
        </Form.Group>

        <Button block-size="lg" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  }
}

export default Contact;

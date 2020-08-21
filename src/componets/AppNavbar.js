import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText } from 'reactstrap';


export default class AppNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/home">Baby App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-l" navbar>
            <NavbarBrand tag={Link} to="/home">HOME</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/contact">CONTACT</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/about">ABOUT</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/user/">USER</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/registration">REGESTRATION</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/login">LOGIN</NavbarBrand>
    
          </Nav>
        </Collapse>
      </Navbar>;  
  }
}



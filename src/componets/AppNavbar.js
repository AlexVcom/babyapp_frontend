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
    // return musi zwracać środek 
    return <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/home">Baby App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-l" navbar>
            <NavbarBrand tag={Link} to="/home">HOME</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/contact">CONTACT</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/about">ABOUT</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/user/">USER</NavbarBrand>
            <NavbarBrand tag={Link} to="/api/login">LOGIN</NavbarBrand>
    
          </Nav>
        </Collapse>
      </Navbar>;





    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="/">Baby App</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/home">HOME <span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/contact">CONTACT</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/about">ABOUT</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/user">USER</a>
    //       </li>
    //       <li className="nav-item ml-auto">
    //         <a className="nav-link" href="/login" >LOGIN</a>
    //       </li>

    //     </ul>
    //   </div>

    // </nav>
  

  }
}



import React from "react";
import {Navbar, Nav} from 'react-bootstrap'

const Nav1 = () => {
  return (
    <Navbar className="d-flex" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto p-2">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Nav1;

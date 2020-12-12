import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Clock from '../Clock';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {

  return (

    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to='/'>
          <Navbar.Brand href="#home">
            ReactShop
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to='/secondpage'>
              <Nav.Link href="#secondpage">Second Page</Nav.Link>
            </NavLink>
            <NavLink to='/cart'>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Clock />
        </Navbar.Brand>
      </Container>
    </Navbar>

  );

};

export default NavMenu;
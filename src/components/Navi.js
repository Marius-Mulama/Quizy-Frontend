import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function Navi() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-1">
        <Link to="/">
          <Navbar.Brand>LOGO</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav className="d-flex justify-content-between mr-4">
            <Link to="/login">
              <Button variant="outline-info" >
              LOGIN
              </Button>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navi;

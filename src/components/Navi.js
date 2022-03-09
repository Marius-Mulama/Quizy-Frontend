import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import avatar from "../images/avatar.png";

function Navi({ user }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-1"
      >
        <Link to="/">
          <Navbar.Brand>LOGO</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="d-flex justify-content-between mr-4">
            {user ? (
              <>
              <Link to="/profile">
                <Navbar.Brand>
                  <img
                    src={avatar}
                    width="30"
                    height="30"
                    className="d-inline-block align-top user-avatar"
                    alt=""
                  />
                  {user}
                </Navbar.Brand>
              </Link>

              <Link to="/login">
                <Button variant="outline-info">LOGOUT</Button>
              </Link>

              </>

              
            ) : (
              <Link to="/login">
                <Button variant="outline-info">LOGIN</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navi;

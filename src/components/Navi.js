import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function Navi({ user }) {
  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self");
  };
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
                      src={user.photos[0].value}
                      width="30"
                      height="30"
                      className="d-inline-block align-top user-avatar"
                      alt=""
                    />
                    {user.name.givenName.toUpperCase()}
                  </Navbar.Brand>
                </Link>

                <Link to="/login">
                  <Button variant="outline-info" onClick={logout}>
                    LOGOUT
                  </Button>
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

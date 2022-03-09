import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handeleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
      <Card
        className="border-0 mx-auto card-info"
        style={{ padding: "5px" }}
      >
        <Card.Header style={{ paddingTop: "5px", paddingBottom: "5px" }}>
          <h3 className="card-title text-center">{"LOGIN"}</h3>
        </Card.Header>

        <Form onSubmit={this.login}>
          <Card.Body>
            <div className="form-group row">
              <label htmlFor="email" className="col-form-label col-12">
                Email
              </label>
              <br />
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handeleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-form-label col-12">
                Password
              </label>
              <br />
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handeleInputChange}
                  required
                />
              </div>
            </div>
          </Card.Body>
          <div className="col text-center">
            <Button
              type="submit"
              className="btn btn-lg btn-secondary col-12"
              style={{ marginBottom: "10px" }}
              name="submit"
            >
              LOGIN
            </Button>
          </div>
          <div className="form-group text-center">
            <p>
              Dont Have An Account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </Form>
      </Card>
      </>
    );
  }
}

export default LoginForm;

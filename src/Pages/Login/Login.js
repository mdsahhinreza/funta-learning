import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="" style={{ minHeight: "85vh" }}>
      <Row>
        <Col
          md="4"
          className="mx-auto my-5 border border-warning rounded text-start py-4"
        >
          <h3 className="text-center">Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="text-center">
              <Button variant="outline-primary" type="submit" className="w-100">
                Submit
              </Button>
            </div>
          </Form>
          <p className="my-2">
            New At Funta Learning? Please <Link to="/register">Register</Link>
          </p>
          <div className="mt-2">
            <button className="btn btn-outline-primary w-100">
              <FaGoogle /> Continue with Google
            </button>
            <button className="btn btn-outline-dark w-100 mt-2">
              <FaGithub /> Continue with GitHub
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

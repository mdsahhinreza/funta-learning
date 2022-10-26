import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState(null);
  const handleAccepted = (event) => {
    setAcceptTerms(event.target.checked);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const photurl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPass.value;

    console.log(fullname, photurl, email, password, confirmPassword);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => setError(error.message));
  };
  return (
    <Container className="" style={{ minHeight: "85vh" }}>
      <Row>
        <Col
          md="5"
          className="mx-auto my-5 border border-warning rounded text-start py-4"
        >
          <h3 className="text-center">Register</h3>
          <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPass"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                label="Accept Terms and Conditions"
              />
            </Form.Group>
            <p>{error ? error : ""}</p>
            <div className="text-center">
              <Button variant="primary" type="submit" disabled={!acceptTerms}>
                Submit
              </Button>
              <Button variant="danger" className="ms-2" type="reset">
                Reset
              </Button>
            </div>
          </Form>
          <p className="my-2">
            Already Member Of Funta Learning? Please{" "}
            <Link to="/login">Login</Link>
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

export default Register;

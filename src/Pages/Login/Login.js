import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const { logIn, setUser, createUserWithSocial } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleUserSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true });
        setError(null);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    createUserWithSocial(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/courses");
      })
      .catch((error) => setError(error.message));
  };

  const handleGitHubSignIn = () => {
    const gitProvider = new GithubAuthProvider();
    createUserWithSocial(gitProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/courses");
      })
      .catch((error) => setError(error.message));
  };

  return (
    <Container className="" style={{ minHeight: "85vh" }}>
      <Row>
        <Col
          md="4"
          className="mx-auto my-5 border border-warning rounded text-start py-4"
        >
          <h3 className="text-center">Login</h3>
          <Form onSubmit={handleUserSignIn}>
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
            <p className={error ? "alert alert-danger" : ""}>
              {error ? error : ""}
            </p>
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
            <button
              className="btn btn-outline-primary w-100"
              onClick={handleGoogleSignIn}
            >
              <FaGoogle /> Continue with Google
            </button>
            <button
              className="btn btn-outline-dark w-100 mt-2"
              onClick={handleGitHubSignIn}
            >
              <FaGithub /> Continue with GitHub
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

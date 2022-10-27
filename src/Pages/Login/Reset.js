import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Reset = () => {
  const { resetPassword } = useContext(AuthContext);
  const [suc, setSuc] = useState(null);

  const resetHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    resetPassword(email)
      .then((result) => {
        const user = result.user;
        setSuc("Reset Link Send to your mail ");
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="" style={{ minHeight: "85vh" }}>
      <div className="container d-none d-md-block w-25 border border-success rounded p-3 mt-5">
        <h4>Forget Password</h4>
        <hr></hr>
        <Form onSubmit={resetHandler} className="mx-auto">
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="border-success border-opacity-50"
              name="email"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Button className="w-100" variant="outline-success" type="submit">
            Send Password Reset Link
          </Button>
          <br></br>
        </Form>
      </div>

      <div className="container w-75 d-sm-block d-md-none border border-success rounded p-3 mt-5">
        <h4>Forget Password</h4>
        <hr></hr>
        <Form onSubmit={resetHandler} className="mx-auto">
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="border-success border-opacity-50"
              name="email"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <p>{suc ? suc : ""}</p>
          <Button className="w-100" variant="outline-success" type="submit">
            Send Password Reset Link
          </Button>
          <br></br>
        </Form>
      </div>
    </div>
  );
};

export default Reset;

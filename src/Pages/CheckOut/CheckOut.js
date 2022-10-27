import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaUserGraduate } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const {
    course_name,
    full_img,
    instructor,
    details,
    price,
    enrolled,
    ratings,
  } = useLoaderData();
  const { user, isDarkMode } = useContext(AuthContext);
  return (
    <div className={isDarkMode ? "dark-body" : ""}>
      <Container>
        <Row className="py-5">
          <Col md="6 px-5" style={{ minHeight: "75vh" }}>
            <div className="d-flex align-items-center justify-content-between text-start my-2">
              <h4>{course_name}</h4>
              <h4 className="fw-normal">${price}</h4>
            </div>
            <Image src={full_img} className="img-fluid"></Image>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex text-start align-items-center">
                <Image
                  className="border border-success "
                  style={{ height: "40px", width: "40px" }}
                  roundedCircle
                  src={instructor.photo}
                ></Image>
                <div className="ms-2">
                  <p className="m-0">Instuctor</p>
                  <p className="m-0 fw-bold">{instructor.name}</p>
                </div>
              </div>
              <div className="text-end align-items-center mt-2">
                <span className="funta-bg-light px-3 mx-1 py-2 rounded-pill text-light">
                  Rating <FaStar />
                  {ratings.rating}
                </span>

                <span className="funta-bg-light px-3 mx-1 py-2 rounded-pill text-light">
                  Enrolled <FaUserGraduate />
                  {enrolled}
                </span>
              </div>
            </div>

            <p className="text-start my-3">
              {details.length > 200 ? details.slice(0, 220) + "..." : details}
            </p>
          </Col>
          <Col md="6 text-start">
            <h3>Payment Details</h3>
            <p>Complete Your Purchase to complete payment process</p>

            <div>
              <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={user.email}
                    placeholder="Enter email"
                    readOnly
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Cart Number </Form.Label>
                  <Form.Control type="number" placeholder="Card Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Your Address </Form.Label>
                  <Form.Control
                    as="textarea"
                    type="number"
                    placeholder="Address"
                  />
                </Form.Group>

                <div className="text-center">
                  <Link
                    className={
                      isDarkMode ? "btn btn-outline-dark" : "funta-btn-outline"
                    }
                    to="/home"
                  >
                    Payment Confirm ${price}
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckOut;

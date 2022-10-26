import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {
  FaCartPlus,
  FaDownload,
  FaLayerGroup,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    course_name,
    full_img,
    instructor,
    details,
    category_name,
    price,
    enrolled,
    ratings,
  } = course;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://funta-learning-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div style={{ minHeight: "85vh" }}>
      <Container className="my-3">
        <Row>
          <Col md="4">
            <div className="sticky-top">
              <h2 className="my-2">Course Category</h2> <hr />
              <div className="text-start border p-4 border-warning">
                {categories.map((cat) => (
                  <div key={cat.category_id}>
                    <Link
                      className="btn btn-outline-warning w-100 mb-3"
                      to={`/category/${cat.category_id}`}
                    >
                      <b>{cat.category_name}</b>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md="8">
            <Row>
              <Col md="12">
                <div className="d-flex justify-content-between mt-2">
                  <div className="text-start">
                    <h2>{course_name}</h2>
                    <p className="fw-bold">Category: {category_name}</p>
                  </div>
                  <div>
                    <Button>
                      <FaDownload /> Download Course outline{" "}
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="12">
                <Image src={full_img} className="img-fluid w-100"></Image>
              </Col>
            </Row>
            <div className="row d-flex justify-content-between mt-3">
              <div className="col-6 text-start d-flex align-items-center">
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
              <div className="col-6 text-center">
                <span className="funta-bg-light px-3 mx-1 py-2 rounded-pill text-light">
                  Price ${price}
                </span>

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
            <div className="mt-5">
              <p className="text-start">{details}</p>
            </div>
            <div className="my-5">
              <Link className="btn btn-lg btn-outline-success">
                <FaCartPlus /> Enroll This Course
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;

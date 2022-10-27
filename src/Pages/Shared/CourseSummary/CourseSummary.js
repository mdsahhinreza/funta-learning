import React from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  FaCartPlus,
  FaDollarSign,
  FaEye,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseSummary = ({ course }) => {
  const {
    course_id,
    course_name,
    full_img,
    instructor,
    details,
    category_name,
    price,
    enrolled,
    ratings,
  } = course;
  return (
    <div>
      <Card className="course" style={{ minHeight: "465px" }}>
        <div className="p-3 pb-0">
          <Card.Img className="rounded" variant="top" src={full_img} />
        </div>
        <Card.Body className="pt-0">
          <div className="row p-3 d-flex justify-content-center align-items-center">
            <div className="col-2 p-0">
              <Image
                className="border border-success"
                style={{ height: "40px", width: "40px" }}
                roundedCircle
                src={instructor.photo}
              ></Image>
            </div>
            <div className="col-7 p-0">
              <p className="text-dark text-start mb-0">{instructor.name}</p>
            </div>
            <div className="col-3 p-0">
              <small className="p-2 text-dark funta-bg-light-50 rounded">
                {category_name}
              </small>
            </div>
          </div>
          <Card.Title
            className="text-start ff-poppins"
            style={{ height: "50px" }}
          >
            {course_name}
          </Card.Title>
          <Card.Text className="text-start">
            {details.length > 200 ? details.slice(0, 220) + "..." : details}
          </Card.Text>
          <div className="d-flex">
            <ButtonGroup className="w-100" aria-label="Basic example">
              <Button
                variant="outline-info"
                as={Link}
                to={`/course-details/${course_id}`}
              >
                <FaEye /> Details
              </Button>
              <Button
                variant="outline-primary"
                as={Link}
                to={`/course-checkout/${course_id}`}
              >
                <FaCartPlus /> Check Out
              </Button>
            </ButtonGroup>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="release funta-bg-light-50 p-2 rounded">
              <small className="mb-0 text-dark">
                <FaDollarSign />
                {price}
              </small>
            </div>
            <div className="fevorate funta-bg-light-50 p-2 rounded">
              <small className="mb-0 text-dark">
                <FaStar /> {ratings.rating} ({ratings.rated})
              </small>
            </div>
            <div className="fevorate funta-bg-light-50 p-2 rounded">
              <small className="mb-0 text-dark">
                <FaUserGraduate /> {enrolled}
              </small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummary;

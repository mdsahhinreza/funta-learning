import React from "react";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaCalendar, FaThumbsUp } from "react-icons/fa";

const CourseSummary = ({ course }) => {
  const { course_name, full_img, instructor } = course;
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
                style={{ height: "40px" }}
                roundedCircle
                src={instructor.photo}
              ></Image>
            </div>
            <div className="col-7 p-0">
              <p className="text-dark text-start mb-0">{instructor.name}</p>
            </div>
            <div className="col-3 p-0">
              <small className="p-2 text-dark funta-bg-light-50 rounded">
                Tailwind
              </small>
            </div>
          </div>
          <Card.Title
            className="text-start ff-poppins"
            style={{ height: "50px" }}
          >
            {course_name}
          </Card.Title>
          <div className="d-flex">
            <button className="btn btn-outline-success">Details</button>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="release funta-bg-light-50 p-2 rounded">
              <small className="mb-0 text-dark">
                <FaCalendar></FaCalendar> 12-10-2022
              </small>
            </div>
            <div className="fevorate funta-bg-light-50 p-2 rounded">
              <small className="mb-0 text-dark">
                <FaThumbsUp></FaThumbsUp> 2304+
              </small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummary;

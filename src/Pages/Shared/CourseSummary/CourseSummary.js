import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseSummary = ({ course }) => {
  const { course_name, full_img } = course;
  return (
    <div>
      <Card className="text-start">
        {/* <Card.Header as="h5">{course_name}</Card.Header> */}
        <Card.Body>
          <Row>
            <Col className="col-12 col-md-6">
              <img className="img-fluid" src={full_img} alt="" />
            </Col>
            <Col className="col-12 col-md-6">
              <Card.Title>{course_name}</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummary;

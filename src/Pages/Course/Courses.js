import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import CourseSummary from "../Shared/CourseSummary/CourseSummary";

const Courses = () => {
  const courses = useLoaderData();
  const { isDarkMode } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://funta-learning-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div
      style={{ minHeight: "85vh" }}
      className={isDarkMode ? "dark-body" : ""}
    >
      <Container className="py-3">
        <Row>
          <Col md="4">
            <div className="sticky-top">
              <h2 className="my-2">Course Category</h2> <hr />
              <div
                className={`text-start border p-4 ${
                  isDarkMode ? "border-dark" : "border-warning"
                }`}
              >
                {categories.map((cat) => (
                  <div key={cat.category_id}>
                    <Link
                      className={` w-100 mb-3 ${
                        isDarkMode
                          ? "btn btn-outline-dark "
                          : "btn btn-outline-warning"
                      }`}
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
              {courses.map((course) => (
                <Col md="6" key={course.course_id} className="pb-5">
                  <CourseSummary course={course}></CourseSummary>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;

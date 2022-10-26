import React from "react";
import { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Banner from "../../asset/images/banner.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaArrowDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../Shared/CourseSummary/CourseSummary";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://funta-learning-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => {
        data.shift();
        setCategories(data);
      });
  }, []);
  const courses = useLoaderData();
  const { isDarkMode } = useContext(AuthContext);
  return (
    <div>
      <div className={isDarkMode ? "light-dark" : "funta-bg-light"}>
        <Container>
          <Row className="py-5">
            <Col md="6" className="text-light d-flex align-items-center">
              <div className="text-start">
                <h1 className="display-3 fw-semibold text-start">
                  Explore Your Favorite course with{" "}
                  <b>
                    <u>#FuntaLearning!</u>
                  </b>{" "}
                </h1>
                <button className="btn btn-lg btn-danger mt-3 rounded-0">
                  Explore Courses <FaArrowDown />
                </button>
              </div>
            </Col>
            <Col md="6">
              <img
                className="d-none d-md-block"
                width={450}
                src={Banner}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <>
          <div className="container pt-5">
            <h2 className="ff-poppins fw-bolder">Top Categories</h2>
            <div className="row d-flex justify-content-center gap-5 mt-4 text-light">
              {categories.map((cat) => (
                <div
                  key={cat.category_id}
                  className="col-1 funta-bg-light-50 rounded category"
                >
                  <Image
                    src={cat.icon}
                    width={80}
                    className="display-3 p-3 funta-bg bg-opacity-50 rounded-5 mt-2"
                  ></Image>

                  <p className="mt-2 mb-1">{cat.category_name}</p>
                </div>
              ))}
            </div>
          </div>
        </>
        <Row className="my-5">
          <h3 className="mt-4">Most Populer Courses!</h3>
          <hr className="my-0 mx-auto p-0 w-25" />
          <Swiper
            className="my-5"
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={true}
            navigation
            spaceBetween={50}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
            // slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.course_id} className="pb-5">
                <CourseSummary course={course}></CourseSummary>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DayNightToggle from "react-day-and-night-toggle";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Logo from "../../../asset/images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaCode, FaKey, FaRegEdit } from "react-icons/fa";

const Header = () => {
  const { isDarkMode, handleModeToggole } = useContext(AuthContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={isDarkMode ? "bg-dark" : "funta-bg"}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img className="me-2" width={50} src={Logo} alt="" />
          <h3>FuntaLearning</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <FaCode /> Courses
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register">
              <FaRegEdit></FaRegEdit> Register
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <FaKey /> Login
            </Nav.Link>
            <Nav.Link>
              <DayNightToggle
                onChange={handleModeToggole}
                checked={isDarkMode}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
